import React from 'react';
import {
    Flex,
    Image,
    Text,
    Grid,
    ActionIcon,
    Space,
    Container,
    Button,
    Center,
    rem,

} from '@mantine/core';

export const CV = () => {
    return (
        
        <div>
                <Grid ml="3rem">
                    <Grid.Col span={8}><Button variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} ml = "4rem">Download Leonardo's Resume</Button></Grid.Col>
                    <Grid.Col span={5}>  
                    <Image maw={2240} mx="auto" radius="md" src="Leonardo_Chen_Resume.png" alt="Random image" />
                    </Grid.Col>

                </Grid>
        </div>
    );
};
