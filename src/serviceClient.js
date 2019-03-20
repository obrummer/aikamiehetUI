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
        let res = await fetch('http://localhost:3001/', options);
        if (!res.ok) throw Error(res.status);
        return true;
    } catch (error) {
        console.error('File upload failed: ' + error);
        throw false;
    }
}
