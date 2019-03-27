export async function postFile(data, path) {
    try {
        const formData = new FormData();
        formData.append('audiofile', data);
        const options = {
            method: 'POST',
            mode: 'cors',
            mimeType: 'multipart/form-data',
            body: formData
        };
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

// nomatch result is an empty array
export async function postLyrics(bodyData) {
    const options = {
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(bodyData),
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        }
    };
    try {
        let result = await fetch('http://loppuprojekti-env.4wv6cxwtgr.eu-central-1.elasticbeanstalk.com/lyrics', options);
        let jsonRes = await result.json();
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
