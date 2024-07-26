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

const userSchema = new mongoose.Schema({
    userId: String,
    password: String
});

const User = mongoose.model('User', userSchema);

app.get("/add-photo-video", async (req, res) => {
  res.send(`
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Video and Photo</title>
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
            overflow: hidden;
            border-bottom: 1px solid #ccc;
            margin-bottom: 20px;
        }
        .tab button {
            background-color: inherit;
            border: none;
            outline: none;
            cursor: pointer;
            padding: 10px 20px;
            transition: background-color 0.3s ease;
        }
        .tab button:hover {
            background-color: #ddd;
        }
        .tab button.active {
            background-color: #fff;
            border-bottom: 2px solid #5cb85c;
        }
        .tabcontent {
            display: none;
        }
        .tabcontent.active {
            display: block;
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
    <h1>Add Video and Photo URLs</h1>
    
    <div class="tab">
        <button class="tablinks active" onclick="openTab(event, 'video')">Add Video</button>
        <button class="tablinks" onclick="openTab(event, 'photo')">Add Photo</button>
        <button class="tablinks" onclick="sessionStorage.clear()">Logout</button>
    </div>
    
    <div id="video" class="tabcontent active">
        <form action="/add-video" method="POST" onsubmit="showAlert('video-alert')">
            <label for="video-url">Video URL:</label>
            <input type="text" id="video-url" name="url" placeholder="Enter Video URL" required>
            <input type="submit" value="Add">
        </form>
        <div id="video-alert" class="alert" style="display: none;">Video URL added successfully!</div>
    </div>
    
    <div id="photo" class="tabcontent">
        <form action="/add-photos" method="POST" onsubmit="showAlert('photo-alert')">
            <label for="photo-url">Photo URL:</label>
            <input type="text" id="photo-url" name="instagramUrl" placeholder="Enter Photo URL" required>
            <input type="submit" value="Add">
        </form>
        <div id="photo-alert" class="alert" style="display: none;">Photo URL added successfully!</div>
    </div>
    
    <script>

        async function promptForCredentials() {
            const user = sessionStorage.getItem('userId');
            if (user) {
                console.log(user);
                return;
            } else {
             window.location.pathname = '/';
            }
        }

        window.onload = promptForCredentials;
        setInterval(promptForCredentials, 1000);


        function openTab(evt, tabName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].classList.remove("active");
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].classList.remove("active");
            }
            document.getElementById(tabName).classList.add("active");
            evt.currentTarget.classList.add("active");
        }
        
        function showAlert(alertId) {
            var alertElement = document.getElementById(alertId);
            alertElement.style.display = 'block';
            setTimeout(function() {
                alertElement.style.display = 'none';
            }, 3000);
        }
    </script>
</body>
</html>

    `);
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

app.post('/login', async (req, res) => {
    const { userId, password } = req.body;
    console.log(userId, password);
    try {
        const user = await User.findOne({ userId: userId, password: password });

        if (user) {
            res.json({ message: 'Login successful', user: userId });
        } else {
            res.json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
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
    res.redirect("/");
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

// app.post("/add-photos", async (req, res) => {
//   try {
//     // Save the new photo URL
//     const newUrl = new photo({ photo: req.body.photoUrls });
//     await photo.deleteMany({});
//     console.log(req.body.photoUrls)
//     await newUrl.save();
//     res.redirect("/");
//   } catch (error) {
//     console.error("Error:", error);
//     res.status(500).send("Internal Server Error");
//   }
// });

app.post("/add-photos", async (req, res) => {
    const { instagramUrl } = req.body; // Assuming you send the Instagram URL in req.body.instagramUrl

    if (!instagramUrl) {
        return res.status(400).send('Missing Instagram URL in request body');
    }

    try {
        const browser = await puppeteer.launch({
            headless: true, // Run in headless mode
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
                // Example filter criteria: Select images with specific width and height
                if (img.width >= 300 && img.height >= 300) {
                    validImageLinks.push(img.src);
                }
            });

            return validImageLinks;
        });

        // console.log(imageLinks);

        // Here you can store or further process the filtered image links
        const newUrl = new photo({ photo: imageLinks });
        await photo.deleteMany({});
        await newUrl.save();

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

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});



