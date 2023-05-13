import React from 'react';
import {
    Flex,
    Image,
    Text,
    Grid,
    ActionIcon,
    Space,
    Container,

} from '@mantine/core';
import { Link } from 'react-router-dom';

export const NotFound = () => {
    return (
        <Flex
            mih={50}
            bg="rgba(0, 0, 0, 0)"
            gap="md"
            justify="flex-start"
            align="flex-start"
            direction="column"
            wrap="wrap"
            ml="2rem"
        >
            <Text
                // variant="gradient"
                // gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                c="#74C0FC"
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                ta="left"
                fz="xl"
                fw={700}
            >
                <h1>
                    Page Not Found

                </h1>
            </Text>

            <Text
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                ta="center"
                fz="xl"
                fw={700}
                component={Link}
                to = "/"


            >
                Home
            </Text>
        </Flex>




    );
};