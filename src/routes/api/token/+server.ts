import { ENV } from '$src/ENV.js';
import { json } from '@sveltejs/kit';
import { AccessToken } from 'livekit-server-sdk';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request }) {
    const { roomName, participantName } = await request.json();
    const at = new AccessToken(ENV.LIVEKIT_PUBLIC_KEY, ENV.LIVEKIT_SECRET_KEY, {
        identity: participantName + Date.now(),
        name: participantName,
    })

    at.addGrant({ roomJoin: true, room: roomName, canPublish: true, canSubscribe: true });
    const token = at.toJwt();
    const response = {
        message: "Successfull",
        statusCode: 200,
        payload: { token },
        success: true
    }
    return json(response);
}