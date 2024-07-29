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
const puppeteer = require('puppeteer');

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

// const userSchema = new mongoose.Schema({
//     userId: String,
//     password: String,
//     role: String
// });

const userSchema = new mongoose.Schema({
    userId: String,
    password: String,
    role: String,
    username: { type: String, unique: true, required: true } // Make sure to handle uniqueness and required
});
const User = mongoose.model('User', userSchema);

// async function adminPage() {
//     const user = await User.findOne();
//     console.log(user)
//     const data = await User.create({
//         userId:"user12",
//         password:"user12",
//         role:"user",
//         username:"user12"
//     })
// }

// adminPage()

app.get("/add-photo-video", async (req, res) => {
    res.sendFile("index.html", { root: __dirname });
});


app.get("/", async (req, res) => {
    res.send(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login Prompt</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        h1 {
            color: #333;
        }
        p {
            color: #666;
        }
        .container {
            background: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            text-align: center;
        }
        .btn {
            display: inline-block;
            padding: 10px 20px;
            margin: 20px;
            font-size: 16px;
            color: #fff;
            background-color: #007bff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
        }
        .btn:hover {
            background-color: #0056b3;
        }
    </style>
    <script>
        async function promptForCredentials() {
            const user = sessionStorage.getItem('userId');
            if (user) {
                window.location.pathname = '/add-photo-video';
                return;
            } else {
                const userId = prompt("Please enter your User ID:");
                const password = prompt("Please enter your Password:");
                if (userId && password) {
                    try {
                        const response = await fetch('/login', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify({ userId, password })
                        });

                        const result = await response.json();
                        sessionStorage.setItem('userId', result.user);
                        sessionStorage.setItem('role', result.role);
                        if (result.message === 'Login successful') {
                            window.location.pathname = '/add-photo-video';
                return;
                        }
                        alert(result.message);
                    } catch (error) {
                        alert('An error occurred');
                    }
                } else {
                    alert("User ID and Password are required.");
                }
            }
        }

        window.onload = promptForCredentials;
    </script>
</head>
<body>
    <div class="container">
        <h1>Welcome to the Bhagvat Prasadam Login Page</h1>
        <p>Please enter your credentials to proceed.</p>
    </div>
</body>
</html>


    `)
})

app.get('/fetch-users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Server error' });
    }
});




app.post('/login', async (req, res) => {
    const { userId, password } = req.body;
    console.log(userId, password);
    try {
        const user = await User.findOne({ userId: userId, password: password });

        if (user) {
            res.json({ message: 'Login successful', user: userId, role: user.role });
        } else {
            res.json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});

app.post("/add-video", async (req, res) => {
    const { url } = req.body;
    console.log(url);
    try {
        const urlParts = url.split("/");
        const videoId = urlParts[urlParts.length - 1];
        await Url.deleteMany({});
        const newUrl = new Url({ url: "https://www.youtube.com/embed/" + videoId });
        await newUrl.save();
        res.redirect("/");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});


app.post("/add-photos", async (req, res) => {
    const { instagramUrl } = req.body;
    console.log(instagramUrl);
    if (!instagramUrl) {
        return res.status(400).send('Missing Instagram URL in request body');
    }

    try {
        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox'],
        });

        const page = await browser.newPage();
        page.on('dialog', async dialog => {
            console.log(`Dialog message: ${dialog.message()}`);
            await dialog.accept();
        });

        await page.goto(instagramUrl, { waitUntil: 'networkidle2' });
        await page.waitForSelector('img[decoding="auto"]');

        const imageLinks = await page.evaluate(() => {
            const images = document.querySelectorAll('img[decoding="auto"]');
            const validImageLinks = [];

            images.forEach(img => {
                if (img.width >= 300 && img.height >= 300) {
                    validImageLinks.push(img.src);
                }
            });

            return validImageLinks;
        });

        await photo.deleteMany({});
        const newPhoto = new photo({ photo: imageLinks });
        await newPhoto.save();
        await browser.close();
        res.redirect("/");
    } catch (error) {
        console.error('Puppeteer error:', error);
        res.status(500).send("Internal Server Error");
    }
});



app.get("/fetch", async (req, res) => {
  const urls = await Url.find(); // Fetch existing URLs
  const photos = await photo.find(); // Fetch existing photos
  res.send({urls, photos});
});

app.post("/add-user", async (req, res) => {
    const { userId, password, role, username } = req.body;
    
    if (!userId || !password || !role || !username) {
        return res.status(400).send('All fields are required.');
    }

    try {
        const newUser = new User({ userId, password, role, username });
        await newUser.save();
        res.json({ message: "User added successfully" });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ message: "Server error" });
    }
});


app.delete("/delete-user/:userId", async (req, res) => {
    const { userId } = req.params;

    try {
        const result = await User.deleteOne({ userId: userId });
        
        if (result.deletedCount > 0) {
            res.json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: "Server error" });
    }
});


app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});



