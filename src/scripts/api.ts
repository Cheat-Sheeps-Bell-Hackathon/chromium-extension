async function auditWebsite(pageContent: string, url: string){
    let response

    try {
        let body = JSON.stringify({
            words : [pageContent],
            url : url
        })

        response = await fetch(
            "http://127.0.0.1:8000/predict",
            {
                method: "post",
                body,
                headers: {
                    "Content-Type": "application/json"
                }
            }
        )
    } catch(e) {
        return {
            success: false,
            assessment: null,
            url: null
        }
    }

    if (response.status != 200) {
        return {
            success: false,
            assessment: null,
            url: null
        }
    }

    console.log("body response", await response.json())

    return {
        success: true,
        assessment: response.body,
        url: url
    }
}

export { auditWebsite }