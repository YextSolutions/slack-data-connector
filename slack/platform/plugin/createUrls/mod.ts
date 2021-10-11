declare var workspaceName: string;

export function createChannelUrl(idString: string) {
    const ids = idString.split(",");
    var fullURL = "slack://channel?team=" + ids[1] + "&id=" + ids[0];
    return fullURL
}

export function createMessageUrl(idString: string) {
    const ids = idString.split(",");
    var fullURL = "https://" + workspaceName + ".slack.com/archives/" + ids[0] + "/p" + ids[1]
    return fullURL
}

export function createThreadUrl(timestamp: string) {
    var fullURL = "https://" + workspaceName + ".slack.com/archives/" + channelId + "/p" + timestamp + "?thread_ts=" + threadTimestamp "&cid=" + channelId
    return fullURL
}
