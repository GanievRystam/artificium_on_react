import React from "react";
import Messages from "../../components/messages/Messages";
import Navbar from "../../components/navbar/Navbar";


export default function Home() {
    return (
        <section class="section-auth">
            <div class="container">
                <div class="flex-wrap">
                    <Navbar />
                    <Messages />
                </div>
            </div>
        </section>
    )
}