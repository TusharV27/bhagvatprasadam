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

// -------------------------------------------------------
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

// app.get("/", async (req, res) => {// Fetch existing URLs
//   res.send(`
//         <!DOCTYPE html>
//         <html lang="en">
//         <head>
//             <meta charset="UTF-8">
//             <meta name="viewport" content="width=device-width, initial-scale=1.0">
//             <title>Add Video</title>
//             <style>
//                 body {
//                     font-family: Arial, sans-serif;
//                     margin: 20px;
//                     padding: 20px;
//                     background-color: #f4f4f4;
//                 }
//                 h1 {
//                     color: #333;
//                 }
//                 form {
//                     margin-bottom: 20px;
//                 }
//                 input[type="text"] {
//                     padding: 10px;
//                     width: 300px;
//                     margin-right: 10px;
//                 }
//                 input[type="submit"] {
//                     padding: 10px 15px;
//                     background-color: #5cb85c;
//                     color: white;
//                     border: none;
//                     cursor: pointer;
//                 }
//                 input[type="submit"]:hover {
//                     background-color: #4cae4c;
//                 }
//                 .alert {
//                     color: green;
//                     font-weight: bold;
//                 }
//             </style>
//         </head>
//         <body>
//             <h1>Add Video URL</h1>
//             <form action="/" method="POST" onsubmit="showAlert()">
//                 <input type="text" name="url" placeholder="Enter URL" required>
//                 <input type="submit" value="Add Video">
//             </form>
//             <div id="alert" class="alert" style="display: none;">URL added successfully!</div>
//             <script>
//                 function showAlert() {
//                     document.getElementById('alert').style.display = 'block';
//                     setTimeout(() => {
//                         document.getElementById('alert').style.display = 'none';
//                     }, 3000);
//                 }
//             </script>
//         </body>
//         </html>
//     `)
// });

// app.post("/", async (req, res) => {
//   const { url } = req.body;
  
//   // Assuming 'Url' is a Mongoose model for storing URLs

// try {
//     const urlParts = url.split("/");
//     const videoId = urlParts[urlParts.length - 1];

//     // Remove the old URL if it exists
//     await Url.deleteMany({});

//     // Save the new URL
//     const newUrl = new Url({ url: "https://www.youtube.com/embed/" + videoId });
//     await newUrl.save();

//     res.redirect("/");
// } catch (error) {
//     // Handle any errors that occur during deletion or saving
//     console.error("Error:", error);
//     res.status(500).send("Internal Server Error");
// }

// });

// app.get("/fetch", async (req, res) => {
//   const urls = await Url.find(); // Fetch existing URLs
//   res.send(urls);
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port: ${PORT}`);
// });

// --------------------------------------------------------
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
  },
});

const Url = mongoose.model("Url", urlSchema);

const photoSchema = new mongoose.Schema({
  photo: {
    type: Array,
  },
});

const photo = mongoose.model("photo", photoSchema);

app.get("/", async (req, res) => {
  res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Video and Photo URLs</title>
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
        .tab {
            display: none;
        }
        .active {
            display: block;
        }
        .tabs {
            margin-bottom: 20px;
        }
        .tablinks {
            padding: 10px;
            cursor: pointer;
            background-color: #5cb85c;
            color: white;
            border: none;
            margin-right: 5px;
        }
        .tablinks:hover {
            background-color: #4cae4c;
        }
        input[type="text"] {
            padding: 10px;
            width: 300px;
            margin-right: 10px;
            margin-bottom: 5px; /* Add margin bottom for spacing between inputs */
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
            margin-top: 10px; /* Add margin top for spacing below form */
        }
    </style>
</head>
<body>
    <h1>Add URLs</h1>
    <div class="tabs">
        <button class="tablinks" onclick="openTab(event, 'videoTab')">Add Video URL</button>
        <button class="tablinks" onclick="openTab(event, 'photoTab')">Add Photo URLs</button>
    </div>
    
    <div id="videoTab" class="tab active">
        <form action="/add-video" method="POST" onsubmit="showAlert('videoTab')">
            <input type="text" name="url" placeholder="Enter Video URL" required>
            <input type="submit" value="Add Video">
        </form>
        <div id="videoAlert" class="alert" style="display: none;">Video URL added successfully!</div>
    </div>

    <div id="photoTab" class="tab">
        <form id="photoForm" action="/add-photos" method="POST" onsubmit="showAlert('photoTab')">
            <input type="number" id="photoCount" name="photoCount" placeholder="Number of Photos" required min="1">
            <div id="photoInputs"></div>
            <input type="submit" value="Add Photos">
        </form>
        <div id="photoAlert" class="alert" style="display: none;">Photo URLs added successfully!</div>
    </div>

    <script>
        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tab");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";  
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }
            document.getElementById(tabName).style.display = "block";  
            evt.currentTarget.className += " active";
        }

        function showAlert(tabName) {
            var alertId = tabName === 'videoTab' ? 'videoAlert' : 'photoAlert';
            document.getElementById(alertId).style.display = 'block';
            setTimeout(() => {
                document.getElementById(alertId).style.display = 'none';
            }, 3000);
        }

        // Function to dynamically generate photo URL input fields
        document.getElementById('photoCount').addEventListener('input', function() {
            var count = parseInt(this.value);
            var html = '';
            for (var i = 0; i < count; i++) {
                html += '<input type="text" name="photoUrls[]" placeholder="Enter Photo URL ' + (i + 1) + '" required><br>';
            }
            document.getElementById('photoInputs').innerHTML = html;
        });
    </script>
</body>
</html>

    `);
});

app.post("/add-video", async (req, res) => {
  const { url } = req.body;
  
  try {
    const urlParts = url.split("/");
    const videoId = urlParts[urlParts.length - 1];
    await Url.deleteMany({});
    // Save the new video URL
    const newUrl = new Url({ type: 'video', url: "https://www.youtube.com/embed/" + videoId });
    await newUrl.save();
    console.log("video")
    res.redirect("/");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/add-photos", async (req, res) => {
  try {
    // Save the new photo URL
    const newUrl = new photo({ photo: req.body.photoUrls });
    await photo.deleteMany({});
    console.log(req.body.photoUrls)
    await newUrl.save();

    res.redirect("/");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/fetch", async (req, res) => {
  const urls = await Url.find(); // Fetch existing URLs
  const photos = await photo.find(); // Fetch existing photos
  res.send({urls, photos});
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
