import * as React from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Box, Paper, Typography } from '@mui/material';
import Footer from './Footer';

export default function FAQs() {
    return (
        <Box sx={{ p: 2, width: '100%', boxSizing: 'border-box' }}>
            <Paper elevation={3} sx={{ my: 2, mx: 'auto', p: 2, width: '100%', boxSizing: 'border-box', overflowX: 'auto' }}>
                <Typography variant='h5' sx={{ fontWeight: 700, color: 'secondary.main', textAlign: 'center', mb: 2 }}>Frequently Asked Questions (FAQs)</Typography>
                <TreeView
                    aria-label="file system navigator"
                    sx={{fontSize:'1.2rem'}}
                    defaultCollapseIcon={<ExpandMoreIcon sx={{color:'primary.main'}}/>}
                    defaultExpandIcon={<ChevronRightIcon sx={{color:'primary.dark'}}/>}
                >
                    <Typography variant='h6' sx={{ color: 'secondary.dark', textDecoration:'underline'}}>Genral FAQs:</Typography>

                    <TreeItem sx={{fontSize:'inherit'}} nodeId="1" label="What is Fahm-e-Quran.com?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="2" label="Fahm-e-Quran.com is an online platform dedicated to Quranic education and Islamic studies. We offer a range of courses to help you deepen your understanding of the Quran and Islam." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="3" label="Who can benefit from Fahm-e-Quran.com?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="4" label="Anyone interested in Quranic education and Islamic studies, regardless of age or background, can benefit from our courses." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="5" label="What are the available courses?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="6" label="We offer a variety of courses, including Quran recitation, Quran with translation, Quran with Tajweed, Hadiths, Duas, Tafsir, and more. Explore our course catalog for details." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="7" label="Is there a free trial available?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="8" label="Yes, we offer a 1-week free trial for our courses. It's an opportunity to experience our teaching methods and course content before enrolling." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="9" label="How do I sign up for a free trial?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="10" label="To sign up for a free trial, click the Sign Up button, create an account, and select the course you'd like to try. Your free trial will be automatically activated." />
                    </TreeItem>


                    <Typography variant='h6' sx={{ color: 'secondary.dark', textDecoration:'underline'}}>Student Account FAQs:</Typography>

                    <TreeItem sx={{fontSize:'inherit'}} nodeId="11" label="How do I create a student account?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="12" label="To create a student account, click Sign Up, fill in your details, and verify your email. You can then log in and access your account." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="13" label="What benefits come with a student account?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="14" label="With a student account, you can enroll in courses, track your progress, access course materials, and manage your subscription." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="15" label="Can I change my course after enrolling?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="16" label="Yes, you can change your course. Log in, go to your account settings, and select a different course. Your progress will be saved." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="17" label="How do I reset my password if I forget it?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="18" label="You can reset your password by clicking the Forgot Password link on the login page. Follow the instructions sent to your email." />
                    </TreeItem>


                    <Typography variant='h6' sx={{ color: 'secondary.dark', textDecoration:'underline'}}>Course-Specific FAQs:</Typography>

                    <TreeItem sx={{fontSize:'inherit'}} nodeId="19" label="Are the courses self-paced or scheduled?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="20" label="Our courses are designed to be flexible. You can choose to study at your own pace or follow a structured schedule." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="21" label="Is there live interaction with instructors?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="22" label="Some courses include live sessions with our qualified instructors. Check the course details for more information." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="23" label="What qualifications do your instructors have?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="24" label="Our instructors are highly qualified and have extensive knowledge of the Quran and Islamic studies. They are committed to providing quality education." />
                    </TreeItem>


                    <Typography variant='h6' sx={{ color: 'secondary.dark', textDecoration:'underline'}}>Technical Support FAQs:</Typography>

                    <TreeItem sx={{fontSize:'inherit'}} nodeId="25" label="I'm experiencing technical issues. How can I get help?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="26" label="If you encounter technical issues, please contact our support team through the Contact Us page. We'll assist you promptly." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="27" label="Do I need special software or equipment to access the courses?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="28" label="No special software is required. You can access our courses using a computer, tablet, or smartphone with an internet connection and a modern web browser.You can get Course With Zoom, Skype, even on WhatsApp" />
                    </TreeItem>

                    <Typography variant='h6' sx={{ color: 'secondary.dark', textDecoration:'underline'}}>Payment FAQs:</Typography>

                    <TreeItem sx={{fontSize:'inherit'}} nodeId="29" label="What is the payment process for courses?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="30" label="We use Stripe, a secure payment gateway. You can easily pay for courses using major credit and debit cards. Your payment information is encrypted and secure." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="31" label="Is my payment information safe?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="32" label="Yes, we prioritize the security of your payment information. We use encryption and follow industry standards to protect your data." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="33" label="Are there any hidden fees or recurring charges?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="34" label="We have transparent pricing. You will only be charged based on the course you choose and any applicable subscription fees. There are not any Hidden Charges" />
                    </TreeItem>


                    <Typography variant='h6' sx={{ color: 'secondary.dark', textDecoration:'underline'}}>Course Progress and Completion FAQs:</Typography>

                    <TreeItem sx={{fontSize:'inherit'}} nodeId="35" label="How do I track my course progress?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="36" label="Your course progress can be tracked in your student account. You'll see completed lessons and assessments." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="37" label="Is there a certificate upon course completion?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="38" label="Yes, we provide certificates of completion for our courses. You can download and share them as proof of your learning." />
                    </TreeItem>


                    <Typography variant='h6' sx={{ color: 'secondary.dark', textDecoration:'underline'}}>Community and Support FAQs:</Typography>

                    <TreeItem sx={{fontSize:'inherit'}} nodeId="39" label="Is there a community forum for students?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="40" label="Yes, we have a community forum where students can connect, discuss course topics, and share experiences." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="41" label="Do you have a mobile app for learning?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="42" label="We are developing a mobile app for convenient learning on smartphones and tablets. Stay tuned for updates." />
                    </TreeItem>



                    <Typography variant='h6' sx={{ color: 'secondary.dark', textDecoration:'underline'}}>Social Responsibility FAQs:</Typography>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="49" label="Do you have any community outreach programs?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="50" label="We are committed to community outreach and may offer free courses to underprivileged students or contribute to charitable causes. Contact us for more information." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="51" label="How can I get involved in social initiatives?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="52" label="If you're interested in participating in our social initiatives, please reach out to us. We'd love to have your support." />
                    </TreeItem>

                    



                    <Typography variant='h6' sx={{ color: 'secondary.dark', textDecoration:'underline'}}>Additional Services FAQs:</Typography>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="43" label="Do you offer scholarships or financial assistance?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="44" label="We may offer scholarships or reduced fees for students with financial constraints. Contact our support team for details." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="45" label="What additional resources are available?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="46" label="We provide supplementary resources such as e-books, articles, and videos to enhance your learning experience." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="47" label="Can I request a specific topic or course?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="48" label="Yes, we welcome suggestions for course topics. Please let us know what you'd like to see in our course offerings." />
                    </TreeItem>





                    <Typography variant='h6' sx={{ color: 'secondary.dark', textDecoration:'underline'}}>Feedback and Improvement FAQs:</Typography>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="61" label="How can I provide feedback on courses?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="62" label="We value your feedback. You can provide feedback on courses through our platform or by contacting our support team." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="63" label="How do you continuously improve course content?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="64" label="We regularly review and update course content based on student feedback and industry developments to ensure high-quality education." />
                    </TreeItem>




                    <Typography variant='h6' sx={{ color: 'secondary.dark', textDecoration:'underline'}}>Contact and Support FAQs:</Typography>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="57" label="How can I contact your support team?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="58" label="You can reach our support team through the Contact Us page on our website. We aim to respond to inquiries promptly." />
                    </TreeItem>
                    <TreeItem sx={{fontSize:'inherit'}} nodeId="59" label="Is there a helpline for urgent assistance?">
                        <TreeItem sx={{fontSize:'inherit'}} nodeId="60" label="While we do not have a dedicated helpline, our support team will respond to urgent inquiries as quickly as possible." />
                    </TreeItem>




                </TreeView>
            </Paper>
            <Footer/>
        </Box>
    );
}