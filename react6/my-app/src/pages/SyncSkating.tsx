import { MedalistsTable } from "../components/MedalistsTable";
import IceUnityImage from '../assets/img/Marigold_IceUnity.jpg';
import { Reference } from "../components/Reference";
import { ImageContainer } from "../components/ImageContainer";

export const SyncSkating = () => {
    return (
        <article>
            <h2>Синхронное фигурное катание</h2>
            <ImageContainer
                image={IceUnityImage}
                description="Команда из Финляндии «Marigold IceUnity». Элемент «Колесо»."
                link="https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5_%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D0%B8%D0%B5"
            />
            <MedalistsTable />
            <Reference link={"https://ru.wikipedia.org/wiki/%D0%A1%D0%B8%D0%BD%D1%85%D1%80%D0%BE%D0%BD%D0%BD%D0%BE%D0%B5_%D1%84%D0%B8%D0%B3%D1%83%D1%80%D0%BD%D0%BE%D0%B5_%D0%BA%D0%B0%D1%82%D0%B0%D0%BD%D0%B8%D0%B5"} />
        </article>
    );
};