import React, { useEffect, useState } from "react";
import {
	Flex,
	Image,
	Text,
	Card,
	Group,
	Badge,
	Button,
	Anchor,
} from "@mantine/core";


import {isMobile} from 'react-device-detect';
import projectsObj from "../consts/projects.json";

export const Projects = () => {
	// const [projects, setProjects] = useState([]);
	// useEffect(() => {
	// 	setProjects(projectsObj);
	// }, [projects]);
	return (
		<div className="projectDiv">
			<Flex
				mih={50}
				gap="md"
				justify="center"
				align="center"
				direction="column"
				wrap="wrap">
				{projectsObj.map((proj) => {
					return (
						<Card
							shadow="sm"
							padding="lg"
							radius="md"
							withBorder
							w= {isMobile?"100%":"60%"}
							>
							<Card.Section>
								<Image
									src={proj.image}
									height={160}
                                    fit="contain"
									mt={10}
								/>
							</Card.Section>

							<Group
								position="apart"
								mt="md"
								mb="xs">
								<Text weight={500}>{proj.title}</Text>
								<Badge
									color="pink"
									variant="light">
									{proj.version}
								</Badge>
							</Group>

							<Text
								size="sm"
								color="dimmed">
								{proj.description}
							</Text>

							{proj.links.map((link) => {
								return (
									<a href={link.link} >
										<Button
											
											variant="light"
											color="blue"
											fullWidth
											mt="md"
											radius="md">
											{link.name}
										</Button>
									</a>
								);
							})}
						</Card>
					);
				})}
			</Flex>
		</div>
	);
};
