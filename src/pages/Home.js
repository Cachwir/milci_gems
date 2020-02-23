import React from "react";
import "./Home.css";

function Home()
{
    return (
        <section className="home">
            <article className="top-image">
                <figure className="post-img picture"></figure>
                <h3 className="ls-s1 caption-transparent post-img-inner-text">Des gemmes d'exception</h3>
            </article>
            <div className="container">
                <article className="post">
                    <p>La gemmologie est une science qui a pour but d’étudier les gemmes, les minéraux, les roches, utilisés dans l’horlogerie, joaillerie, bijouterie, bijoux anciens, orfèvrerie.<br />
                        Le gemmologue s’arme toujours de patience pour prendre le temps d’analyser les gemmes avec le plus de précision possible, il a sa disposition de nombreux outils pour l’aider, la loupe, le spectroscope, le polariscope…</p>
                    <p>Il y a de nombreuses variétés de gemmes dans le monde , en voici un échantillon que le gemmologue peut expertiser.</p>
                </article>
            </div>
        </section>
    );
}

export default Home;