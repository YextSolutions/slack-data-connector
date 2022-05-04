##### slack-data-connector

# Product Description & Purpose

Slack is a messaging app for business that connects people to the information they need. By bringing people together to work as one unified team, Slack transforms the way organizations communicate. The Slack data connector allows you to sync data from Slack such as channels, messages, threads, and users to Yext on a daily basis. We also use webhooks to pull in real-time updates so any time there are messages, channels or users change, these same changes will occur in Yext.

Pull in channels, messages, and users from your Slack Workspace into Yext. Now you can extend the reach of your Slack data even further to power Yext search experiences. In order to install this app, you will need a Slack account and a Yext account.

This app creates the following custom connectors:	

- slack\_slackChannelsConnector
- slack\_slackMessagesConnector
- slack\_slackUsersConnector

This app creates the following custom entity types that correlate to each connector:		

- slack\_slackChannel
- slack\_slackMessage
- slack\_slackUser

This app creates the following custom fields:

- slack\_channelUrl
- slack\_dateCreated
- slack\_displayName
- slack\_isArchived
- slack\_isBot
- slack\_isDeleted
- slack\_isGeneral
- slack\_isPinned
- slack\_isPrivate
- slack\_jobTitle
- slack\_lastUpdated
- slack\_linkedUser
- slack\_messageText
- slack\_messageTimestamp
- slack\_messageURL
- slack\_messages
- slack\_numberOfMembers
- slack\_purpose
- slack\_reactions
- slack\_replyCount
- slack\_slackAvatar
- slack\_slackChannel
- slack\_statusField
- slack\_teamID
- slack\_timezone
- slack\_topic

This app adds the following plugins to your account:

- slack\_addHash
- slack\_createUrls
- slack\_formatDates


# Requirements

To use this app you will need to have the following before you install:

- Your Slack workspace name
- Slack admin access the workspace

Follow the step-by-step instructions below to install the Slack Public Content Connector app.

# How to Install

If you are an existing Yext customer, you can install the  Slack Public Content Connector here <https://www.yext.com/s/me/apps/58757>

If you are currently using a Yext sandbox account, you can install the Slack Public Content Connector here <https://sandbox.yext.com/s/me/apps/123432>.

If you are not an existing customer, but interested in learning more, try out a free trial here for a production account, or sign up for Hitchhikers and get started with a sandbox account, here <https://hitchhikers.yext.com/>. 

Install the connector to begin pulling in your Slack data into your Knowledge Graph! All you have to do is link your Slack account, choose which types of data you want to pull in:

Channels, Messages. Pinned Messages Only, Replies, or Users. Then, you will be prompted to choose which channels to pull in messages from, if applicable.

### Note:

\*If you choose pinned messages as an option, ONLY pinned messages will be pulled into your Knowledge Graph.

\*If you aren’t an admin on your Slack workspace, you may need to request approval. We recommend having a Slack admin install this connector.

\*If you choose to pull in messages we will pull in the 10,000 most recent messages. If you also choose to pull in replies/threads, we will pull in the 50 most recent threads from each channel.

### To install the Slack Public Content Connector:

1. Log in to your Yext account
2. Navigate to the **Apps > Directory** tab in the platform (or use the link provided above).
3. Search for the Slack Public Content Connector app and click **Install**.
4. Accept the following changes to your account by clicking **Next** and authorize Yext APIs.
5. Provide your Slack workspace name.
6. Select the types of content you want to pull in.
7. Wait for the connector to run and see all of your newly created entities in the **Knowledge Graph** tab in the platform!






