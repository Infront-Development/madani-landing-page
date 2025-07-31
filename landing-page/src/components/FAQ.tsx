import {
  Stack,
  Typography,
  Divider,
  List,
  ListItem,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { 
  ArrowCircleDown,
} from "@mui/icons-material";

const containerStyle = {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}
const fixWidth = "1000px";

export const FAQ = () => {

    return (
        <Stack py="80px" sx={{...containerStyle, background: "linear-gradient(180deg, #FFF 0%, #FEF8F4 100%)"}}>
        <Stack width={fixWidth} alignItems="center" gap="32px">
          <Typography fontSize="48px" fontWeight="600" color="#FE5000">Frequently Asked Question (FAQ)</Typography>
          <Stack width="100%">
            <Accordion defaultExpanded style={{padding: "32px 0px", boxShadow: "none", backgroundColor: "transparent"}}>
              <AccordionSummary expandIcon={<ArrowCircleDown sx={{color:"#F58D02", }}/>}>
                <Typography fontSize="20px" fontWeight="400" color="#191919">1. What is the Madani PMKS Digital Grant? </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">The Madani PMKS Digital Grant is a government initiative by MOF, BSN, MDEC and MCMC to support MSMEs in adopting digital solutions.</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Eligible businesses can receive a 50% matching grant, up to RM5,000, to boost productivity and competitiveness.</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Business registration OR SKM documents</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion style={{padding: "32px 0px", boxShadow: "none", backgroundColor: "transparent"}}>
              <AccordionSummary expandIcon={<ArrowCircleDown sx={{color:"#F58D02", }}/>}>
                <Typography fontSize="20px" fontWeight="400" color="#191919">2. How much funding is allocated for each PMKS or Cooperative under this initiative? </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Each eligible PMKS or Cooperative can receive a grant covering 50% of the invoiced amount, or up to RM5,000.</Typography>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion style={{padding: "32px 0px", boxShadow: "none", backgroundColor: "transparent"}}>
              <AccordionSummary expandIcon={<ArrowCircleDown sx={{color:"#F58D02", }}/>}>
                <Typography fontSize="20px" fontWeight="400" color="#191919">3. Why should I apply now? </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Funds are limited and issued on a first-come, first-served basis.  </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Delaying your application could mean missing out entirely. </Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion style={{padding: "32px 0px", boxShadow: "none", backgroundColor: "transparent"}}>
              <AccordionSummary expandIcon={<ArrowCircleDown sx={{color:"#F58D02", }}/>}>
                <Typography fontSize="20px" fontWeight="400" color="#191919">4. Which digital services are available under Madani PMKS Digital Grant?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">There are seven (7) types of eligible digital services: </Typography>
                <List sx={{ listStyleType: 'decimal', marginLeft: "24px" }}>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Electronic Point of Sale (e-POS) System</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Human Resources (HR) / Customer Relationship Management (CRM) System</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Digital Marketing / Sales</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Cybersecurity</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Enterprise Resource Planning (ERP) / Accounting & Tax</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Digital Signature</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Internet of Things (IoT) / Smart Systems</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion style={{padding: "32px 0px", boxShadow: "none", backgroundColor: "transparent"}}>
              <AccordionSummary expandIcon={<ArrowCircleDown sx={{color:"#F58D02", }}/>}>
                <Typography fontSize="20px" fontWeight="400" color="#191919">5. Who is eligible to apply for the Madani PMKS Digital Grant?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">At least 60% Malaysian-owned</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Registered with SSM, PBT, or SKM (for cooperatives)</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Operating for at least six (6) months 
                      
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Minimum average annual sales turnover of RM 50,000 

                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Has not previously received a digitalisation grant</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion style={{padding: "32px 0px", boxShadow: "none", backgroundColor: "transparent"}}>
              <AccordionSummary expandIcon={<ArrowCircleDown sx={{color:"#F58D02", }}/>}>
                <Typography fontSize="20px" fontWeight="400" color="#191919">6. What documents are required to apply for this initiative?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Completed Digital Grant application form</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">IC/passport of business owner(s)</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Business registration OR SKM documents</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Latest audited account statement OR 2-month bank statement</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Invoice/quotation from a GDPM's appointed Digitalisation Partner (eg: Infront Consulting)</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion style={{padding: "32px 0px", boxShadow: "none", backgroundColor: "transparent"}}>
              <AccordionSummary expandIcon={<ArrowCircleDown sx={{color:"#F58D02", }}/>}>
                <Typography fontSize="20px" fontWeight="400" color="#191919">7. How do I apply for the Madani PMKS Digital Grant (GDPM) on my own?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Apply via the official Funding Societies site, appointed by MDEC to manage the application: https://fundingsocieties.com.my/msme-digital-grant-madani#application-form. </Typography>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion style={{padding: "32px 0px", boxShadow: "none", backgroundColor: "transparent"}}>
              <AccordionSummary expandIcon={<ArrowCircleDown sx={{color:"#F58D02", }}/>}>
                <Typography fontSize="20px" fontWeight="400" color="#191919">8. What happens if my application is approved?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <List sx={{ listStyleType: 'disc', marginLeft: "24px" }}>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">You will be notified via email.</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">You must pay the balance of the invoice (after deducting the grant amount) within 14 days.</Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item', pl: "4px", pt: "0px" }}>
                    <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Once payment is made, your digital service provider will begin delivering the service.</Typography>
                  </ListItem>
                </List>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion style={{padding: "32px 0px", boxShadow: "none", backgroundColor: "transparent"}}>
              <AccordionSummary expandIcon={<ArrowCircleDown sx={{color:"#F58D02", }}/>}>
                <Typography fontSize="20px" fontWeight="400" color="#191919">9. How do I make the payment for the balance of the invoice?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">You will receive a unique link for payment via email.</Typography>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion style={{padding: "32px 0px", boxShadow: "none", backgroundColor: "transparent"}}>
              <AccordionSummary expandIcon={<ArrowCircleDown sx={{color:"#F58D02", }}/>}>
                <Typography fontSize="20px" fontWeight="400" color="#191919">10. What happens if I fail to pay within the specified period?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">Failure to pay on time will result in grant cancellation. A new application will be required.</Typography>
              </AccordionDetails>
            </Accordion>
            <Divider />
            <Accordion style={{padding: "32px 0px", boxShadow: "none", backgroundColor: "transparent"}}>
              <AccordionSummary expandIcon={<ArrowCircleDown sx={{color:"#F58D02", }}/>}>
                <Typography fontSize="20px" fontWeight="400" color="#191919">11. How will I be informed about my application status?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize="16px" fontWeight="400" color="#4B4B4B">You will be notified by email on your application status.</Typography>
              </AccordionDetails>
            </Accordion>
          </Stack>
        </Stack>
      </Stack>
    )
};

export default FAQ;