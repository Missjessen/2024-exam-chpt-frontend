// Import dependencies
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const axios = require('axios');

// Import dependencies
// const express = require('express');
//const axios = require('axios');
// const cors = require('cors');
 const process = require('process');
//import { require } from 'commonjs';
// require('dotenv').config();

// Initialize express app
const app = express();
const port = process.env.PORT || 3003;

// Middleware
app.use(cors());
app.use(express.json());

app.post('/fetch-response', async (req, res) => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
        console.log(response.data);  // Logging the data to the console
        res.json(response.data);  // Sending the data as JSON to the client
    } catch (error) {
        console.error(error);  // Logging the error to the console
        res.status(500).json({ error: 'Failed to fetch data' });
    }
});


// // Route to handle POST requests
// // https://api.openai.com/v1/chat/completions


//     // const headers = {
//     //     'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // ${process.env.OPENAI_API_KEY}
//     //     'Content-Type': 'application/json',
//     // };
/const data = {
        

        "model": "gpt-3.5-turbo",
        "messages": [
           {
            "role": "system",
            "content": "You are a helpful assistant."
          },
          {
             "role": "user",
            "content": "who is elvis"
         }
        ],
        "max_tokens": 150

          
//     //     model: "gpt-3.5-turbo",  // Confirm the correct model identifier from OpenAI documentation
//     //     prompt:  "translate hello world to spanish", // prompt,
//     //     max_tokens: 150, 
        
body: JSON.stringify({
       "model": "gpt-3.5-turbo",
       "messages": [
            {
                "role": "system",
                "content": "You are a helpful assistant."
           },
            {
                 "role": "user",
                "content": "What is the capital of the United States?"
            },
            {
                "role": "assistant",
                 "content": "The capital of the United States is Washington, D.C."
            }
        ]
     }) 
};
//     app.get('/fetch-response', async (req, res) => {
//     try {  

//        fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

// /*         console.log("test")
//         const response = await axios.post('https://api.openai.com/v1/chat/completions', data, { headers });
//         res.json({ response: response.data.choices[0].text }); */
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
//     }
// });

/* app.post('/fetch-response', async (req, res) => {
    const headers = {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`, // ${process.env.OPENAI_API_KEY}
        'Content-Type': 'application/json',
    };
    const data = {
        model: "gpt-3.5-turbo",  // Confirm the correct model identifier from OpenAI documentation
        prompt:  "translate hello world to spanish", // prompt,
        max_tokens: 150
    };

    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', data, { headers });
        res.json({ response: response.data.choices[0].text });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch response from OpenAI' });
    }
}); */

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    console.log(`OpenAI API Key: ${process.env.OPENAI_API_KEY}`)
});