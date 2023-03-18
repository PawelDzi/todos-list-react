import { Container } from "../../common/Container/styled";
import Section from "../../common/Section";
import Title from "../../common/Title";

export default () => (
    <Container>
        <Title title="O autorze" />

        <Section
            title="Paweł Dzierzbicki"
            body={
                <>
                    <h2>Trochę o mnie</h2>
                    <p>
                        Na codzień pracuję w służbach mundurowych. Po pracy spędzam czas na nauce progoramowania oraz przygotowaniu
                        do
                        budowy domu. Aktualnie jestem w momencie załatwiania papierów i przygotowywania działki pod dom.
                    </p>

                    <h2>Jakieś Hobby?</h2>
                    <p>
                        Zimą, gdy jest śnieg wolne chwile spędzam na stoku jeżdżąc na snowbordzie. Oprócz aktywnego spędzania czasu,
                        lubię wieczorem przysiąść przy modelu do sklejania i odpocząć w ciszy od otaczającego hałasu.
                    </p>

                </>}
        />
    </Container>
)