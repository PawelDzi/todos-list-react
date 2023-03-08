import { StyledSections, SectionsItem, SectionsText } from "./styled";

const Section = ({ title, body, extraHeaderContent }) => (

    <StyledSections>
        <SectionsItem
            section
        >
            <SectionsText>
                {title}
            </SectionsText>
            
            {extraHeaderContent}
        </SectionsItem>

        <SectionsItem>
            {body}
        </SectionsItem>
    </StyledSections>
)

export default Section;