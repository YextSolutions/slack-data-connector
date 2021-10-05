declare var teamId: string;
declare var workspaceName: string;

export function createChannelUrl(channelID: string) {
    var fullURL = "slack://channel?team=" + teamId + "&id=" + channelID
    return fullURL
}

export function createMessageUrl(timestamp: string) {
    var fullURL = "https://" + workspaceName + ".slack.com/archives/" + channelId + "/p" + timestamp
    return fullURL
}

export function createThreadUrl(timestamp: string) {
    var fullURL = "https://" + workspaceName + ".slack.com/archives/" + channelId + "/p" + timestamp + "?thread_ts=" + threadTimestamp "&cid=" + channelId
    return fullURL
}