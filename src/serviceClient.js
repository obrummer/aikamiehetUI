// Module for ASYNC resource calls from client

export async function postFile(data) {
    const formData = new FormData();
    formData.append('audiofile', data);
    const options = {
        method: 'POST',
        mode: 'cors',
        mimeType: 'multipart/form-data',
        body: formData
    };
    try {
        let res = await fetch('http://loppuprojekti-env.4wv6cxwtgr.eu-central-1.elasticbeanstalk.com/bucket', options);
        if (!res.ok) throw Error(res.status);
        return res;
    } catch (error) {
        console.error('File upload failed: ' + error);
        throw false;
    }
}
