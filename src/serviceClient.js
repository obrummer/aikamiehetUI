// postFile returns { success:true, message: array} in successful cases (array is empty if no results)
// postFile returns { success:false, message: error message} in unsuccessful cases
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
        let res = await fetch('http://localhost:3001/hum', options);
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

export async function mockResult() {
    try {
        let res = await fetch('http://localhost:3001/hum');
        if (!res.ok) throw Error(res.status);
        let jsonRes = await res.json();
        if (!jsonRes.success) throw Error(jsonRes.message);
        return JSON.parse(jsonRes.message);
    } catch (error) {
        console.error('result mock getter failed: ' + error);
        return false;
    }
}
