loadScripts()
function loadScripts() {
const names = ["Accelerator", "AlwaysMove", "Audio", "AutoDestroy", "Beam", "BotNavigation", "Buttons", "CameraCanvas2D", "CameraControl", "CameraRotator", "Checkpoint", "ChildObjects", "CollectableManagement", "Collectables", "ComponentManager", "Cycle", "Date", "Delay", "DestroyZone", "Drag", "EventTrigger", "ExtendedControls", "Follow", "GamControl", "Interactive", "IsWatching", "Mode", "ObjectManagement", "OpenUI", "OverrideChildObjects", "Pathway", "Performance", "PhysicsManager", "PlayerMovement", "RandomTrigger", "Rotate", "Rotating", "Spawner", "Split", "SpotLight", "StatComparator", "StatCreator", "StateTrigger", "StatOverrider", "Teleport", "TimeOfDay", "Timer", "TimerManager", "TouchTrigger", "Trigger", "UIManagement", "VariableOverride", "VoiceInput", "VoiceListener"]
names.forEach(collectedName => {
create(`<div class=cs>
<button onclick="window.location.href = '${collectedName}.html'">
${collectedName.replace("Gam", "Game")}.cs
</button>
</div>`, "scr")
})
}