
import {
    Flex,
    Image,
    Text,
    Grid,
    ActionIcon,
    Space,
    Container,

} from '@mantine/core';

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export const Home = () => {
    
    return (
        <div>

            <Grid>
                <Grid.Col span={4}>
                    <Image maw={240} mx="auto" radius="md" src="leonardochenpic.png" alt="Random image" />
                </Grid.Col>

                <Grid.Col span={8}>
                    <Flex
                        mih={50}
                        bg="rgba(0, 0, 0, 0)"
                        gap="sm"
                        justify="flex-start"
                        align="flex-start"
                        direction="column"
                        wrap="wrap"
                    >

                        <Flex
                            mih={50}
                            bg="rgba(0, 0, 0, 0)"
                            gap="sm"
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            wrap="wrap"
                        >
                            <Container size="xs" px="xs">
                            <Text
                                // variant="gradient"
                                // gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                                c="#74C0FC"
                                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                                ta="left"
                                fz="xl"
                                fw={700}
                            >
                                <p>
                                    Hi,
                                    my name is Leonardo Chen, and I am a
                                    Computer Science student at {<Text component="a" href="https://www.utah.edu/" c="#4263EB" >
                                        The University Of Utah.
                                    </Text>} This is a personal website to show my projects and professional informations.

                                </p>
                            </Text>
                            </Container>

                        </Flex>

                        <Flex
                            mih={50}
                            bg="rgba(0, 0, 0, 0)"
                            gap="sm"
                            justify="flex-start"
                            align="flex-start"
                            direction="row"
                            wrap="wrap"
                        >
                            <a href="https://github.com/Lynczera" className="gitLink"> <FaGithub size={56} color='#1864AB' /></a>
                            <a href="https://www.linkedin.com/in/leonardo-chen-492582230/" className="linkedinLink"> <FaLinkedin size={56} color='#1864AB' /></a>
                        </Flex>


                    </Flex>
                </Grid.Col>


            </Grid>


        </div>
    );
};
