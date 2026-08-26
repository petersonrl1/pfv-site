---
title: Troubleshooting
order: 8
---

### I cannot hear anything in the house speakers

Work through this checklist in order: (1) Confirm the amplifiers and powered speakers are powered on. (2) Check that the main LR master fader is up (right side of console). (3) Make sure the channel fader is up. (4) Confirm the channel is routed to LR — press Sel on the channel and check the Routing tab. (5) Confirm the channel is not muted — the Mute key should not be lit orange. (6) Confirm no mute group is active. (7) Check the channel meter — is signal reaching the channel at all? If the meter shows no movement, the problem is upstream of the console (bad cable, mic off, phantom power needed).

### Moving a fader has no effect on the house speakers

You are most likely in Sends on Faders mode. When you press a blue Mix key, all 24 faders switch to control sends to that monitor/aux mix, not the house LR. Press the active (lit) Mix key again to return to normal LR mode. Check the top of the touchscreen — it should say "LR" when in normal mode. Also verify you are on the correct layer (Layer 1 for input channels).

### A channel is distorting or sounding harsh

The most common cause is gain too high. Press Sel on the channel, go to the Preamp tab, and check for the red clip indicator at the top of the meter. If clipping, reduce the Gain until peaks hit around 0 dBVU without clipping. Also check that the -20 dB Pad is not needed (for a loud source like a kick drum). If the signal is clean at the preamp but still sounds harsh, check the PEQ for excessive high-frequency boost.

### Feedback (ringing or howling) from monitors or house speakers

Immediate action: reduce the gain of the channel that is feeding back, or pull the monitor master fader down. Then investigate: (1) Confirm the HPF is enabled on the channel — low-frequency buildup is a primary cause of feedback. (2) Reduce the monitor send level for the problem channel. (3) Use the GEQ on the monitor mix (via Fader Flip mode) to identify and notch out the feedback frequency. (4) Reposition the monitor wedge so the microphone is in the monitor's null zone (pointing away from the speaker). (5) Do not increase the preamp gain to compensate for reduced monitor level.

### All faders appear stuck at minimum when I switch layers

This is not a malfunction — it is the motorized faders moving to match the layer positions. Wait a moment for the faders to initialize. If a fader appears stuck, press Sel on that channel and check if the channel has been set to a very low level. Also check that you are on the intended layer — the LCD strip displays show the channel name so you can confirm.

### The channel shows signal but the performer says they cannot hear themselves in the monitor

You need to add the channel to the monitor's mix. Press the blue Mix key for their monitor (e.g., Mix 1 for the drummer). The faders switch to Sends on Faders for that mix. Find the channel strip for the performer's source and raise its fader. Exit Sends on Faders by pressing the Mix key again. Also confirm the send is set to Pre-Fader mode so the monitor is independent of the main fader.

### The touchscreen is not responding or seems frozen

Try a single firm press — the touchscreen is capacitive and requires a deliberate touch. If a parameter is highlighted yellow, use the encoder knob to change it rather than trying to drag on the screen. If the screen is truly frozen, check if a process is still loading (a scene recall or show load can cause a brief pause). If the problem persists, save your scene and reboot the console — the SQ-6 will recall its last state on restart.

### A scene recall changed settings I did not want changed (gain, routing, etc.)

Scene recall loads everything in the snapshot unless filtered. To prevent gain from being overwritten: set up a Recall Filter (Scenes > Recall Filter) to exclude preamp gain from being recalled. To protect specific channels: use Channel Safe to mark individual channels as immune to scene recall. Ask your head engineer to configure these protections in the baseline show file.

### The GEQ faders are not doing anything / faders are showing wrong controls

You have pressed the GEQ Fader Flip key accidentally. In this mode, faders control the 28-band graphic EQ on the selected mix — not channel levels. Press the Fader Flip key again to exit and restore normal fader assignments. The Fader Flip key is near the master section.

### There is a loud thump or pop when powering up or down

The power sequence is incorrect. Always power amplifiers and powered speakers ON last and OFF first. The SQ-6 should be fully booted and at its operating state before amps come up. Power down amps before shutting off the console. If a thump still occurs at normal amp-last startup, check if any channel faders are at a high level or if a mute group should be engaged during startup.

### The USB drive is not recording or I cannot find the recording

Confirm the USB drive is formatted as FAT32 (not NTFS or exFAT). Insert the drive and go to the SQ-Drive page on the touchscreen. The console must be set to record before pressing the record button — configure the source channels and format first. Recordings are saved to the drive root in a folder named SQ. Check the drive has sufficient free space.

### I accidentally changed something and I do not know what

If the change happened recently, recall the current scene (Scenes > Recall) without saving first — this restores the last-recalled scene state. If you have already saved over the scene, load the baseline show file. Going forward, always recall the latest scene before making large changes, and save a numbered scene after any intentional change so you have a history to roll back to.
