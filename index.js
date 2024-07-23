// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// mongoose
//   .connect("mongodb+srv://tusharmegascale:tushar123@cluster0.xlfpxzg.mongodb.net/bhagvatprasadam")
//   .then(() => {
//     console.log("MongoDB connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const urlSchema = new mongoose.Schema({
//   url: {
//     type: String,
//     required: true,
//   },
// });

// const Url = mongoose.model("Url", urlSchema);

// app.get("/", (req, res) => {
//   res.send(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Add Video</title>
//         </head>
//         <body>
//             <h1>Add Video URL</h1>
//             <form action="/" method="POST">
//                 <input type="text" name="url" placeholder="Enter URL" required>
//                 <input type="submit" value="Add Video">
//             </form>
//         </body>
//         </html>
//     `);
// });

// app.post("/", async (req, res) => {
//   const { url } = req.body;
//   const newUrl = new Url({
//     url,
//   });
//   try {
//     await newUrl.save();
//     res.redirect("/");
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Error saving URL");
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose
  .connect("mongodb+srv://tusharmegascale:tushar123@cluster0.xlfpxzg.mongodb.net/bhagvatprasadam")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log(err);
  });

const urlSchema = new mongoose.Schema({
  url: {
    type: String,
    required: true,
  },
});

const Url = mongoose.model("Url", urlSchema);

app.get("/", async (req, res) => {
  const urls = await Url.find(); // Fetch existing URLs
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Add Video</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    padding: 20px;
                    background-color: #f4f4f4;
                }
                h1 {
                    color: #333;
                }
                form {
                    margin-bottom: 20px;
                }
                input[type="text"] {
                    padding: 10px;
                    width: 300px;
                    margin-right: 10px;
                }
                input[type="submit"] {
                    padding: 10px 15px;
                    background-color: #5cb85c;
                    color: white;
                    border: none;
                    cursor: pointer;
                }
                input[type="submit"]:hover {
                    background-color: #4cae4c;
                }
                .alert {
                    color: green;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <h1>Add Video URL</h1>
            <form action="/" method="POST" onsubmit="showAlert()">
                <input type="text" name="url" placeholder="Enter URL" required>
                <input type="submit" value="Add Video">
            </form>
            <div id="alert" class="alert" style="display: none;">URL added successfully!</div>
            <script>
                function showAlert() {
                    document.getElementById('alert').style.display = 'block';
                    setTimeout(() => {
                        document.getElementById('alert').style.display = 'none';
                    }, 3000);
                }
            </script>
        </body>
        </html>
    `)
});

app.post("/", async (req, res) => {
  const { url } = req.body;

  try {
    // Remove the old URL if it exists
    await Url.deleteMany({}); // Deletes all existing URLs

    // Save the new URL
    const newUrl = new Url({ url });
    await newUrl.save();

    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).send("Error saving URL");
  }
});

app.get("/fetch", async (req, res) => {
  const urls = await Url.find(); // Fetch existing URLs
  res.send(urls);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
