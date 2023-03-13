import { StyledSections, SectionsItem, SectionsText } from "./styled";

const Section = ({ title, body, extraHeaderContent, sampleTask }) => (

    <StyledSections>
        <SectionsItem
            section
        >


                    {title}
                    {sampleTask}



            {extraHeaderContent}
        </SectionsItem>

        <SectionsItem>
            {body}
        </SectionsItem>
    </StyledSections>
)

export default Section;