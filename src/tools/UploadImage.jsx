import AWS from 'aws-sdk'

const S3_BUCKET ='m2crowdoscar/ordenes';
const REGION ='us-west-2';


AWS.config.update({
    accessKeyId: process.env.AMAZON_ID,
    secretAccessKey: process.env.AMAZON_SECRET_KEY
})

const myBucket = new AWS.S3({
    params: { Bucket: S3_BUCKET},
    region: REGION,
})


export async function uploadFile(file)  {
    
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
}
