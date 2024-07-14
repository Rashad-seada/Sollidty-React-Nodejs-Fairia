const fs = require('fs');
const FormData = require('form-data');
const fetch = require('node-fetch');

class IPFSUploader {
  constructor(infuraProjectId, infuraProjectSecret) {
    this.infuraProjectId = infuraProjectId; // Your Infura project ID
    this.infuraProjectSecret = infuraProjectSecret; // Your Infura project secret
    this.infuraEndpoint = 'https://ipfs.infura.io:5001/api/v0/add'; // Infura IPFS endpoint
  }

  async uploadFileAndGetUrl(filePath) {
    try {
      const formData = new FormData();
      formData.append('file', fs.createReadStream(filePath));

      const headers = {
        Authorization: `Bearer ${this.infuraProjectSecret}`,
        ...formData.getHeaders(),
      };

      const response = await fetch(this.infuraEndpoint, {
        method: 'POST',
        headers: headers,
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Failed to upload file: ${response.status}`);
      }

      const responseData = await response.json();
      const ipfsHash = responseData.Hash; // IPFS CID (Content Identifier)

      // Construct the URL to view the uploaded file using a public gateway
      const viewUrl = `https://ipfs.io/ipfs/${ipfsHash}`;

      return viewUrl;
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    }
  }
}

// Example usage:
async function main() {
  const infuraProjectId = 'your_infura_project_id';
  const infuraProjectSecret = 'your_infura_project_secret';
  const uploader = new IPFSUploader(infuraProjectId, infuraProjectSecret);

  // Example file path, replace with your own file path
  const filePath = 'path_to_your_file.jpg';

  try {
    const viewUrl = await uploader.uploadFileAndGetUrl(filePath);

    if (viewUrl) {
      console.log(`Uploaded file URL: ${viewUrl}`);
    } else {
      console.log('File upload failed.');
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

main();
