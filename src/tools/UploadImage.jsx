import AWS from 'aws-sdk'

const S3_BUCKET ='m2crowdoscar/ordenes';
const REGION ='us-west-2';


AWS.config.update({
    accessKeyId: 'AKIAW6IEQO6ADLYOHQGI',
    secretAccessKey: '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'
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
            console.log("Se crea")
        })
        .send((err) => {
            if (err) console.log(err)
        })
}
