import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { UiKitMessage, UiKitModal } from '../../app/containers/UIKit';
import StoriesSeparator from './StoriesSeparator';

// eslint-disable-next-line react/prop-types
const Separator = ({ title }) => <StoriesSeparator title={title} theme='light' />;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#efeff4',
		paddingHorizontal: 16
	}
});

export default () => (
	<ScrollView style={styles.container}>
		<Separator title='Section' />
		<UiKitMessage
			blocks={[{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: 'Section'
				}
			}]}
		/>

		<Separator title='Section + Overflow' />
		<UiKitMessage
			blocks={[
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: 'Section + Overflow'
					},
					accessory: {
						type: 'overflow',
						options: [
							{
								text: {
									type: 'plain_text',
									text: 'Option 1',
									emoji: true
								},
								value: 'value-0'
							},
							{
								text: {
									type: 'plain_text',
									text: 'Option 2',
									emoji: true
								},
								value: 'value-1'
							},
							{
								text: {
									type: 'plain_text',
									text: 'Option 3',
									emoji: true
								},
								value: 'value-2'
							},
							{
								text: {
									type: 'plain_text',
									text: 'Option 4',
									emoji: true
								},
								value: 'value-3'
							}
						]
					}
				}
			]}
		/>

		<Separator title='Section + image' />
		<UiKitMessage
			blocks={[{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: 'Section + Image'
				},
				accessory: {
					type: 'image',
					imageUrl: 'https://raw.githubusercontent.com/RocketChat/Rocket.Chat.Artwork/master/Logos/icon-circle-256.png',
					altText: 'plants'
				}
			}]}
		/>

		<Separator title='Section + button' />
		<UiKitMessage
			blocks={[{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: 'Section + button'
				},
				accessory: {
					type: 'button',
					text: {
						type: 'plain_text',
						text: 'button'
					}
				}
			}]}
		/>

		<Separator title='Section + Select' />
		<UiKitMessage
			blocks={[{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: 'Section + select'
				},
				accessory: {
					type: 'static_select',
					options: [
						{
							value: 1,
							text: {
								type: 'plain_text',
								text: 'button'
							}
						}, {
							value: 2,
							text: {
								type: 'plain_text',
								text: 'second button'
							}
						}]
				}
			}]}
		/>

		<Separator title='Section + DatePicker' />
		<UiKitMessage
			blocks={[{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: 'Section + DatePicker'
				},
				accessory: {
					type: 'datepicker',
					initial_date: '1990-04-28',
					placeholder: {
						type: 'plain_text',
						text: 'Select a date',
						emoji: true
					}
				}
			}]}
		/>

		<Separator title='Section + Multi Select' />
		<UiKitMessage
			blocks={[{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: 'Section + select'
				},
				accessory: {
					type: 'multi_static_select',
					options: [{
						text: {
							type: 'plain_text',
							text: 'button'
						},
						value: 1
					}, {
						text: {
							type: 'plain_text',
							text: 'opt 1'
						},
						value: 2
					}, {
						text: {
							type: 'plain_text',
							text: 'opt 2'
						},
						value: 3
					}, {
						text: {
							type: 'plain_text',
							text: 'opt 3'
						},
						value: 4
					}]
				}
			}]}
		/>

		<Separator title='Image' />
		<UiKitMessage
			blocks={[{
				type: 'image',
				title: {
					type: 'plain_text',
					text: 'Example Image',
					emoji: true
				},
				imageUrl: 'https://raw.githubusercontent.com/RocketChat/Rocket.Chat.Artwork/master/Logos/icon-circle-256.png',
				altText: 'Example Image'
			}]}
		/>

		<Separator title='Context' />
		<UiKitMessage
			blocks={[{
				type: 'context',
				elements: [{
					type: 'image',
					title: {
						type: 'plain_text',
						text: 'Example Image',
						emoji: true
					},
					imageUrl: 'https://raw.githubusercontent.com/RocketChat/Rocket.Chat.Artwork/master/Logos/icon-circle-256.png',
					altText: 'Example Image'
				},
				{
					type: 'mrkdwn',
					text: 'context'
				}
				]
			}]}
		/>

		<Separator title='Action - Buttons' />
		<UiKitMessage
			blocks={[{
				type: 'actions',
				elements: [
					{
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Approve'
						},
						style: 'primary',
						value: 'click_me_123'
					},
					{
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Deny'
						},
						style: 'danger',
						value: 'click_me_123'
					},
					{
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Deny'
						},
						style: 'danger',
						value: 'click_me_123'
					},
					{
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Deny'
						},
						style: 'danger',
						value: 'click_me_123'
					},
					{
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Deny'
						},
						style: 'danger',
						value: 'click_me_123'
					},
					{
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Deny'
						},
						style: 'danger',
						value: 'click_me_123'
					},
					{
						type: 'button',
						text: {
							type: 'plain_text',
							emoji: true,
							text: 'Deny'
						},
						style: 'danger',
						value: 'click_me_123'
					}
				]
			}]}
		/>

		<Separator title='Fields' />
		<UiKitMessage
			blocks={[
				{
					type: 'section',
					fields: [
						{
							type: 'plain_text',
							text: '*this is plain_text text*',
							emoji: true
						},
						{
							type: 'plain_text',
							text: '*this is plain_text text*',
							emoji: true
						},
						{
							type: 'plain_text',
							text: '*this is plain_text text*',
							emoji: true
						},
						{
							type: 'plain_text',
							text: '*this is plain_text text*',
							emoji: true
						},
						{
							type: 'plain_text',
							text: '*this is plain_text text*',
							emoji: true
						}
					]
				}]}
		/>

		<Separator title='Action - Select' />
		<UiKitMessage
			blocks={[{
				type: 'actions',
				elements: [
					{
						type: 'conversations_select',
						placeholder: {
							type: 'plain_text',
							text: 'Select a conversation',
							emoji: true
						}
					},
					{
						type: 'channels_select',
						placeholder: {
							type: 'plain_text',
							text: 'Select a channel',
							emoji: true
						}
					},
					{
						type: 'users_select',
						placeholder: {
							type: 'plain_text',
							text: 'Select a user',
							emoji: true
						}
					},
					{
						type: 'static_select',
						placeholder: {
							type: 'plain_text',
							text: 'Select an item',
							emoji: true
						},
						options: [
							{
								text: {
									type: 'plain_text',
									text: 'Excellent item 1',
									emoji: true
								},
								value: 'value-0'
							},
							{
								text: {
									type: 'plain_text',
									text: 'Fantastic item 2',
									emoji: true
								},
								value: 'value-1'
							},
							{
								text: {
									type: 'plain_text',
									text: 'Nifty item 3',
									emoji: true
								},
								value: 'value-2'
							},
							{
								text: {
									type: 'plain_text',
									text: 'Pretty good item 4',
									emoji: true
								},
								value: 'value-3'
							}
						]
					}
				]
			}]}
		/>

		<Separator title='Modal - Images' />
		<UiKitModal
			blocks={[
				{
					type: 'image',
					title: {
						type: 'plain_text',
						text: 'Example Image',
						emoji: true
					},
					imageUrl: 'https://raw.githubusercontent.com/RocketChat/Rocket.Chat.Artwork/master/Logos/icon-circle-256.png',
					alt_text: 'Example Image'
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: 'How could be the life in Mars?'
					}
				},
				{
					type: 'context',
					elements: [
						{
							type: 'image',
							imageUrl: 'https://raw.githubusercontent.com/RocketChat/Rocket.Chat.Artwork/master/Logos/icon-circle-256.png'
						},
						{
							type: 'mrkdwn',
							text: 'November 25, 2019'
						}
					]
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: '*Next stop, Mars!*\nMussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Diuretics paradis num copo é motivis de denguis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Aenean aliquam molestie leo, vitae iaculis nisl.'
					}
				}
			]}
		/>

		<Separator title='Modal - Section Accessories' />
		<UiKitModal
			blocks={[
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: '*Bruno Quadros*,\nPlease review your details for your *travel expense*.\nExpense no. DA921.'
					},
					accessory: {
						type: 'image',
						imageUrl: 'https://raw.githubusercontent.com/RocketChat/Rocket.Chat.Artwork/master/Logos/icon-circle-256.png'
					}
				},
				{
					type: 'divider'
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: '*Date:*\n11/02/2020'
					}
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: '*Category:*\nTravel'
					}
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: '*Cost:*\n$150.00 USD'
					}
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: '*Notes:*\nWebSummit Conference'
					}
				}
			]}
		/>

		<Separator title='Modal - Form TextArea' />
		<UiKitModal
			blocks={[
				{
					type: 'context',
					elements: [{
						type: 'mrkdwn',
						text: 'Task: ZOL-994'
					}]
				},
				{
					type: 'section',
					text: {
						type: 'mrkdwn',
						text: 'Update Spec final assets'
					},
					accessory: {
						type: 'button',
						text: {
							type: 'plain_text',
							text: 'Change'
						}
					}
				},
				{
					type: 'divider'
				},
				{
					type: 'input',
					element: {
						type: 'plain_text_input',
						multiline: true
					},
					placeholder: {
						type: 'plain_text',
						text: 'Write Something',
						emoji: true
					},
					label: {
						type: 'plain_text',
						text: 'Notes',
						emoji: true
					},
					hint: {
						type: 'plain_text',
						text: 'Please take the time to compose something short',
						emoji: true
					},
					description: {
						type: 'plain_text',
						text: 'Describe your update',
						emoji: true
					}
				}
			]}
		/>

		<Separator title='Modal - Actions' />
		<UiKitModal
			blocks={[{
				type: 'input',
				element: {
					type: 'plain_text_input'
				},
				label: {
					type: 'plain_text',
					text: 'Title',
					emoji: true
				}
			},
			{
				type: 'section',
				text: {
					type: 'mrkdwn',
					text: 'Details'
				}
			},
			{
				type: 'section',
				accessory: {
					type: 'static_select',
					options: [
						{
							value: 1,
							text: {
								type: 'plain_text',
								text: 'TypeL Task'
							}
						}, {
							value: 2,
							text: {
								type: 'plain_text',
								text: 'second button'
							}
						}]
				}
			},
			{
				type: 'section',
				accessory: {
					type: 'static_select',
					options: [
						{
							value: 1,
							text: {
								type: 'plain_text',
								text: 'Project: Space (winter)'
							}
						}, {
							value: 2,
							text: {
								type: 'plain_text',
								text: 'second button'
							}
						}]
				}
			},
			{
				type: 'section',
				accessory: {
					type: 'static_select',
					options: [
						{
							value: 1,
							text: {
								type: 'plain_text',
								text: 'Priority (optional)'
							}
						}, {
							value: 2,
							text: {
								type: 'plain_text',
								text: 'second button'
							}
						}]
				}
			},
			{
				type: 'section',
				accessory: {
					type: 'static_select',
					options: [
						{
							value: 1,
							text: {
								type: 'plain_text',
								text: 'Assinee (optional)'
							}
						}, {
							value: 2,
							text: {
								type: 'plain_text',
								text: 'second button'
							}
						}]
				}
			},
			{
				type: 'input',
				element: {
					type: 'plain_text_input',
					multiline: true
				},
				placeholder: {
					type: 'plain_text',
					text: 'Write Something',
					emoji: true
				},
				label: {
					type: 'plain_text',
					text: 'Description',
					emoji: true
				}
			}]}
		/>
	</ScrollView>
);
