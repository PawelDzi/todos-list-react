import { Sections, SectionsItem, SectionsText } from "./styled";

const section = ({ title, body, extraHeaderContent }) => (

    <Sections>
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
    </Sections>
)

export default section;