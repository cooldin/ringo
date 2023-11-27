const { Client, Events, GatewayIntentBits  } = require('discord.js');
const { token } = require('./config.json');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

client.login(token);

client.on('voiceStateUpdate', (oldState, newState) => {
    let newUserChannel = newState.channel;
    // TODO: ring only when channel was empty AND only when user joins voice

    if (newUserChannel !== null) {
        console.log(oldState.channel.members)
        newUserChannel.send(`:dinkdonk:`);
    } 
});