export async function postFile(data, path) {
    const formData = new FormData();
    formData.append('audiofile', data);
    const options = {
        method: 'POST',
        mode: 'cors',
        mimeType: 'multipart/form-data',
        body: formData
    };
    try {
        let res = await fetch('http://loppuprojekti-env.4wv6cxwtgr.eu-central-1.elasticbeanstalk.com/' + path, options);
        let jsonRes = await res.json();
        if (jsonRes.success) {
            return jsonRes.message;
        } else {
            throw new Error(jsonRes.message);
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}