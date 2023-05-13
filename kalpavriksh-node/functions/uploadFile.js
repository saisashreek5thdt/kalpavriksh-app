const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
    region: process.env.S3_REGION,
});

async function uploadFiles(files) {
    const locations = [];
    const promises = files.map(async (file) => {
      const params = {
        Bucket: process.env.S3_BUCKET,
        Key: `${file.originalname}`,
        Body: file.buffer,
        ContentType: file.mimetype
      };
  
      const result = await s3.upload(params).promise();
      //console.log(`File uploaded to ${result.Location}`);
      locations.push(result.Location);
    });
  
    await Promise.all(promises);
    //console.log('All files uploaded successfully');
    return locations[0];
};

module.exports = uploadFiles;
