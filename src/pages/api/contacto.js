export const prerender = false;

import {pool} from '../../db/conexion'

export async function POST({ request }) {
    const data = await request.json();

    await pool.query(
        "INSERT INTO mensajes(nombre,email,mensaje) VALUES($1,$2,$3)",
        [
            data.nombre,
            data.email,
            data.mensaje
        ]
    );
    return new Response(
        JSON.stringify({
            success: true
        }),
        {
            status:200
        }
    );
}