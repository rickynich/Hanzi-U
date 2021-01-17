console.log("是");
//  {
//  	"character": "是",
//  	"definition": "to be; indeed, right, yes; okay",
//  	"pinyin": "shì",
//  	"decomposition": "⿱日疋",
//  	"hint": "To speak 日 directly 疋",
// 	"radical": "日",
//  },

//  This will be the seed data

//  Top 20 in frequency:
chineseCharsLib1 = [
	{
		character: "是",
		definition: "to be; indeed, right, yes; okay",
		pinyin: "shì",
		decomposition: "⿱日疋",
		hint: "To speak 日 directly 疋",
	},
	{
		character: "的",
		definition: "aim, goal; of; possessive particle; -self suffix",
		pinyin: "de",
		decomposition: "⿰白勺",
		hint: "⿰白勺",
	},
	{
		character: "一",
		definition: "one; a, an; alone",
		pinyin: "yī",
		decomposition: "？",
		hint: "Represents heaven (天), earth (旦), or the number 1",
	},
	{
		character: "不",
		definition: "no, not, un-; negative prefix",
		pinyin: "bù",
		decomposition: "⿱一？",
		hint: "A bird flying toward the sky 一",
	},
	{
		character: "了",
		definition: "clear; to finish; particle of completed action",
		pinyin: "le or liǎo",
		decomposition: "⿱乛亅",
		hint: "A child swaddled in blanklets; compare 子",
	},
	{
		character: "在",
		definition:
			"at, in, on; to exist; used to indicate the present progressive tense",
		pinyin: "zài",
		decomposition: "⿸才土",
		etymology: "type: pictophonetic, phonetic: 才, semantic: 土",
		hint: "earth",
	},
	{
		character: "人",
		definition: "man, person; people",
		pinyin: "rén",
		decomposition: "？",
		etymology: "type: pictographic",
		hint: "The legs of a human being",
	},
	{
		character: "有",
		definition: "to have, to own, to possess; to exist",
		pinyin: "yǒu",
		decomposition: "⿸？月",
		etymology: "type: pictophonetic, phonetic: 月",
		hint: "我有钱！ ￥",
	},
	{
		character: "我",
		definition: "I, me, my; our, us",
		pinyin: "wǒ",
		decomposition: "⿰扌戈",
		etymology: "type: ideographic",
		hint: "A hand 扌 holding a weapon 戈",
	},
	{
		character: "他",
		definition: "other, another; he, she, it",
		pinyin: "tā",
		decomposition: "⿰亻也",
		etymology: { type: "ideographic" },
		hint: 'An additional, "also" 也  person 亻',
	},
	{
		character: "这",
		definition: "this, these; such; here",
		pinyin: "zhè",
		decomposition: "⿺辶文",
	},
	{
		character: "个",
		definition: "this, that; single; measure word for individuals",
		pinyin: ["gè"],
		decomposition: "⿱人丨",
		etymology: { type: "ideographic" },
		hint: "A tally 丨 of people 人",
	},
	{
		character: "们",
		definition: "plural marker for pronouns and some nouns",
		pinyin: "men",
		decomposition: "⿰亻门",
		etymology: "type: pictophonetic, phonetic: 门, semantic: 亻",
		hint: "people",
	},
	{
		character: "中",
		definition:
			"central; center, middle; amidst; to hit (target), to attain; China; Chinese",
		pinyin: "zhōng",
		decomposition: "⿻口丨",
		etymology: "type: ideographic",
		hint: "A line 丨 through the center of a box 口",
	},
	{
		character: "来",
		definition: "to arrive, to come, to return; in the future, later on",
		pinyin: "lái",
		decomposition: "⿻未丷",
		etymology: "type: ideographic",
		hint: "A wheat plant that has not yet borne fruit; compare 來",
	},
	{
		character: "上",
		definition: "above, on top, superior; to go up; to attend; previous",
		pinyin: "shàng",
		decomposition: "⿱⺊一",
		etymology: "type: ideographic",
		hint: "One stroke on top of another; compare 下 (below)",
	},
	{
		character: "大",
		definition: "big, great, vast, high, deep",
		pinyin: "dà",
		decomposition: "⿻一人",
		hint: "A man 人 with outstretched arms",
	},
	{
		character: "为",
		definition: "to do, to act; to handle, to govern; to be",
		pinyin: "wèi",
		decomposition: "⿻丶⿴力丶",
	},
	{
		character: "和",
		definition: "harmony, peace; calm, peaceful",
		pinyin: "hé",
		decomposition: "⿰禾口",
		etymology: "type: pictophonetic, phonetic: 禾, semantic: 口",
		hint: "mouth",
	},
	{
		character: "国",
		definition: "country, nation, state; national",
		pinyin: "guó",
		decomposition: "⿴囗玉",
		hint: "Treasure 玉 within a country's borders 囗",
	},
];

// 	return (
// 		<>
// 			<Box
// 				bg="blue.200"
// 				width="350px"
// 				margin="10px"
// 				p={5}
// 				boxShadow="sm"
// 				rounded="lg"
// 			>
// 				<Tabs variant="soft-rounded" colorScheme="blue" isFitted m={2}>
// 					<TabList>
// 						<Tab>Login</Tab>
// 						<Tab>Sign Up</Tab>
// 					</TabList>
// 					<TabPanels>
// 						<TabPanel>
// 							<form onSubmit={onSignUp}>
// 								<div>
// 									<label>User Name</label>
// 									<Input
// 										type="text"
// 										name="username"
// 										onChange={updateUsername}
// 										value={username}
// 									></Input>
// 								</div>
// 								<div>
// 									<label>Email</label>
// 									<Input
// 										type="text"
// 										name="email"
// 										onChange={updateEmail}
// 										value={email}
// 									></Input>
// 								</div>
// 								<div>
// 									<label>Password</label>
// 									<Input
// 										type="password"
// 										name="password"
// 										onChange={updatePassword}
// 										value={password}
// 									></Input>
// 								</div>
// 								<div>
// 									<label>Repeat Password</label>
// 									<Input
// 										type="password"
// 										name="repeat_password"
// 										onChange={updateRepeatPassword}
// 										value={repeatPassword}
// 										required={true}
// 									></Input>
// 								</div>
// 								<Button type="submit">Sign Up</Button>
// 							</form>
// 						</TabPanel>
// 						<TabPanel>
// 							<LoginForm />
// 						</TabPanel>
// 					</TabPanels>
// 				</Tabs>
// 			</Box>
// 		</>
// 	);
// };