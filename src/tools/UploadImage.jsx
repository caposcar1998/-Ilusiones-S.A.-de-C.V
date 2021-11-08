import AWS from 'aws-sdk'

const S3_BUCKET ='m2crowdoscar/ordenes';
const REGION ='us-west-2';


AWS.config.update({
    accessKeyId: process.env.REACT_APP_AMAZON_ID,
    secretAccessKey: process.env.REACT_APP_AMAZON_SECRET_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})


export  function uploadFile(file)  {
    return new Promise(resolve => {
        setTimeout(() => {
    const params = {
        ACL: 'public-read',
        Body: file,
        Bucket: S3_BUCKET,
        Key: file.name
    };

    myBucket.putObject(params)
        .on('httpUploadProgress', (evt) => {
            console.log(evt)
        })
        .send((err) => {
            if (err) console.log(err)
        })
        resolve('resolved');
    }, 4000);
});
}
