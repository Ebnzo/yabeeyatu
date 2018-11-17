
const SOUND_ID = 2026;

module.exports = function ene(mod) {
			let edge;
			let model;

	mod.hook('S_LOGIN', 10, event => {model = event.templateId})

	const showMessage = message => {
		mod.toClient('S_DUNGEON_EVENT_MESSAGE', 2, {
			message: message,
			type: 41,
			channel: 0,
			chat: 0
		});
	};
	
	function playSound(id) {
		mod.toClient('S_PLAY_SOUND', 1, {
			SoundID: id
		})
	}
			
		mod.hook('S_PLAYER_STAT_UPDATE', 10, {order: -9999}, (event) => {
		edge = event.edge
		
		if (edge >=10 && edge <= 10) {
			showMessage(`<font size="50">&nbsp;Full Stack</font>`);
			playSound(SOUND_ID);
			mod.command.message(`stacks: ${edge}`)
		}
});		
	

		mod.command.add('ps', (SOUND_ID) => {
			playSound(SOUND_ID);
		})

}
