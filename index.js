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
// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");
// const multer = require('multer');
// const fetch = require('node-fetch');
// const FormData = require('form-data');
// const Buffer = require('buffer').Buffer;
// const crypto = require('crypto');
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import multer from 'multer';
import fetch from 'node-fetch';
import FormData from 'form-data';
import Buffer from 'buffer';
import crypto from 'crypto';
import path from 'path';
import {fileURLToPath} from 'url'

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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

const Photo = mongoose.model("photo", photoSchema);

const GITHUB_API_URL = 'https://api.github.com/repos/TusharV27/bhagvatprasadam-images/contents/';
const GITHUB_TOKEN = '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';
const FOLDER_PATH = 'PHOTO_FOLDER/';

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
    // res.sendFile('index.html', { root: __dirname })
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


app.post('/add-photos', upload.array('photos'), async (req, res) => {
    const files = req.files;
  
    if (!files || files.length === 0) {
      return res.status(400).send('No files uploaded');
    }
  
    try {
      const imageUrls = [];
  
      for (const file of files) {
        const base64Content = file.buffer.toString('base64');
        const filePath = `${FOLDER_PATH}${crypto.randomBytes(16).toString('hex')}_${file.originalname}`;
  
        console.log(`Processing file: ${file.originalname}`);
        console.log(`Base64 Content Length: ${base64Content.length}`);
  
        try {
          // Upload to GitHub
          const response = await fetch(GITHUB_API_URL + filePath, {
            method: 'PUT',
            headers: {
              'Authorization': `token ${GITHUB_TOKEN}`,
              'Content-Type': 'application/json',
              'Accept': 'application/vnd.github.v3+json',
            },
            body: JSON.stringify({
              message: 'Upload photo',
              content: base64Content,
            }),
          });
  
          if (!response.ok) {
            const errorResponse = await response.json();
            throw new Error(`GitHub API Error: ${errorResponse.message}`);
          }
  
          const jsonResponse = await response.json();
          console.log(`Uploaded ${file.originalname}: ${jsonResponse.content.download_url}`);
          imageUrls.push(jsonResponse.content.download_url);
        } catch (uploadError) {
          console.error(`Error uploading ${file.originalname}:`, uploadError);
          // You might choose to continue with the next file or halt depending on requirements
          // Continue processing other files
        }
      }
  
      // Save the URLs to MongoDB
      try {
        await Photo.deleteMany({});
        const newPhoto = new Photo({ photo: imageUrls });
        await newPhoto.save();
        res.redirect('/');
      } catch (dbError) {
        console.error('Database Error:', dbError);
        res.status(500).send('Failed to save photo URLs to database');
      }
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  });



// app.post('/add-photos', upload.array('photos'), async (req, res) => {
//     const files = req.files;
  
//     if (!files || files.length === 0) {
//       return res.status(400).send('No files uploaded');
//     }
  
//     try {
//       // Process all files and get their URLs
//       const imageUrls = await Promise.all(files.map(async (file) => {
//         const base64Content = file.buffer.toString('base64');
//         const filePath = `${FOLDER_PATH}${crypto.randomBytes(16).toString('hex')}_${file.originalname}`; // Generate a unique file name
  
//         // Log base64 content length and hash for debugging
//         console.log(`Processing file: ${file.originalname}`);
//         console.log(`Base64 Content Length: ${base64Content.length}`);
  
//         try {
//           // Upload to GitHub
//           const response = await fetch(GITHUB_API_URL + filePath, {
//             method: 'PUT',
//             headers: {
//               'Authorization': `token ${GITHUB_TOKEN}`,
//               'Content-Type': 'application/json',
//               'Accept': 'application/vnd.github.v3+json',
//             },
//             body: JSON.stringify({
//               message: 'Upload photo',
//               content: base64Content,
//             }),
//           });
  
//           if (!response.ok) {
//             const errorResponse = await response.json();
//             throw new Error(`GitHub API Error: ${errorResponse.message}`);
//           }
  
//           const jsonResponse = await response.json();
//           console.log(`Uploaded ${file.originalname}: ${jsonResponse.content.download_url}`);
//           return jsonResponse.content.download_url; // Return the URL of the uploaded file
//         } catch (uploadError) {
//           console.error(`Error uploading ${file.originalname}:`, uploadError);
//           throw uploadError; // Re-throw to handle in the outer try/catch
//         }
//       }));
  
//       // Save the URLs to MongoDB
//       try {
//         await Photo.deleteMany({});
//         const newPhoto = new Photo({ photo: imageUrls });
//         await newPhoto.save();
//         res.redirect('/');
//       } catch (dbError) {
//         console.error('Database Error:', dbError);
//         res.status(500).send('Failed to save photo URLs to database');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });


// app.post('/add-photos', upload.array('photos'), async (req, res) => {
//     const files = req.files;
  
//     if (!files || files.length === 0) {
//       return res.status(400).send('No files uploaded');
//     }
  
//     try {
//       // Process all files and get their URLs
//       const imageUrls = await Promise.all(files.map(async (file) => {
//         const base64Content = file.buffer.toString('base64');
//         const filePath = `${FOLDER_PATH}${crypto.randomBytes(16).toString('hex')}_${file.originalname}`; // Generate a unique file name
  
//         // Log base64 content length and hash for debugging
//         console.log(`Processing file: ${file.originalname}`);
//         console.log(`Base64 Content Length: ${base64Content.length}`);
  
//         // Upload to GitHub
//         const response = await fetch(GITHUB_API_URL + filePath, {
//           method: 'PUT',
//           headers: {
//             'Authorization': `token ${GITHUB_TOKEN}`,
//             'Content-Type': 'application/json',
//             'Accept': 'application/vnd.github.v3+json',
//           },
//           body: JSON.stringify({
//             message: 'Upload photo',
//             content: base64Content,
//           }),
//         });
  
//         const jsonResponse = await response.json();
//         if (response.ok) {
//           console.log(`Uploaded ${file.originalname}: ${jsonResponse.content.download_url}`);
//           return jsonResponse.content.download_url; // Return the URL of the uploaded file
//         } else {
//           throw new Error(`Failed to upload ${file.originalname}: ${jsonResponse.message}`);
//         }
//       }));
  
//       // Save the URLs to MongoDB
//       await Photo.deleteMany({});
//       const newPhoto = new Photo({ photo: imageUrls });
//       await newPhoto.save();
  
//       res.redirect('/');
//     } catch (error) {
//       console.error('Error:', error);
//       res.status(500).send('Internal Server Error');
//     }
//   });

// app.post("/add-photos", async (req, res) => {
//     const { instagramUrl } = req.body;
//     console.log(instagramUrl);
//     console.log("Hello");
//     if (!instagramUrl) {
//         return res.status(400).send('Missing Instagram URL in request body');
//     }

//     try {
//         const browser = await puppeteer.launch({
//             headless: true,
//             args: ['--no-sandbox', '--disable-setuid-sandbox'],
//         });

//         const page = await browser.newPage();
//         page.on('dialog', async dialog => {
//             console.log(`Dialog message: ${dialog.message()}`);
//             await dialog.accept();
//         });

//         await page.goto(instagramUrl, { waitUntil: 'networkidle2' });
//         await page.waitForSelector('img[decoding="auto"]');

//         const imageLinks = await page.evaluate(() => {
//             const images = document.querySelectorAll('img[decoding="auto"]');
//             const validImageLinks = [];

//             images.forEach(img => {
//                 if (img.width >= 300 && img.height >= 300) {
//                     validImageLinks.push(img.src);
//                 }
//             });

//             return validImageLinks;
//         });

//         await photo.deleteMany({});
//         const newPhoto = new photo({ photo: imageLinks });
//         await newPhoto.save();
//         await browser.close();
//         res.redirect("/");
//     } catch (error) {
//         console.error('Puppeteer error:', error);
//         res.status(500).send("Internal Server Error");
//     }
// });



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



