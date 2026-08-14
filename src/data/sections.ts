import type { Section } from "../types";

export const sections: Section[] = [
  {
    id: "welcome",
    icon: "🎚️",
    title: "Welcome",
    color: "#f5c16d",
    content: {
      type: "intro",
      highlights: [
        "The Allen & Heath SQ-6 is a 48-channel digital mixing console with 24 motorized faders, a 7-inch touchscreen, and 96kHz FPGA processing — giving you professional studio quality in a live sound package.",
        "This guide walks you through every skill a volunteer operator needs: powering up safely, setting gain, building monitor mixes, using effects, and recovering from common problems.",
        "You do not need prior digital console experience. Work through each section in order, and you will be running your first service with confidence.",
      ],
    },
  },

  {
    id: "zones",
    icon: "🗺️",
    title: "Console Zones",
    color: "#5bd6cf",
    content: {
      type: "zones",
      zones: [
        {
          name: "Fader Bay (24 Channel Strips)",
          description: "The 24 motorized fader strips on the left side of the console are your primary mixing surface. Each strip has a motorized fader, a Mute key (lit orange when muted), a Select key (Sel — opens that channel on the touchscreen), a PAFL key (routes the channel to your headphones), a peak meter LED, and a small LCD screen showing the channel name and color. Faders physically move when you switch layers or enter Sends on Faders mode.",
          color: "#5bd6cf",
        },
        {
          name: "Master Section (right side)",
          description: "The right side holds a single dedicated master fader strip that controls the main LR output (or whatever mix is currently selected). Above it are the main stereo level meters, a headphone output with level knob for PAFL monitoring, and a Talk key for the built-in talkback mic input. The blue Mix select keys here let you jump into Sends on Faders mode for any mix bus.",
          color: "#ff8a72",
        },
        {
          name: "Touchscreen and Encoder Section (center)",
          description: "The 7-inch capacitive color touchscreen is the command center for all processing, routing, and setup. A large illuminated encoder to its right adjusts whatever parameter is highlighted in yellow on screen. Surrounding the screen are additional high-grip soft encoders for hands-on parameter control. The 16 SoftKeys below can be assigned to any function — scene recall, mute groups, tap tempo, talkback, and more.",
          color: "#84c8ff",
        },
        {
          name: "Rear Panel I/O",
          description: "The rear panel provides 24 XLR mic/line inputs, 2 TRS stereo inputs, a 3.5mm stereo input, 16 assignable local outputs (14 XLR + 2 TRS), an AES digital output, a talkback XLR input, a USB-A port (SQ-Drive — for recording and playback to a USB drive), a USB-B port (32x32 audio interface to a computer), and an SLink port for connecting stage boxes or the ME personal monitor system.",
          color: "#a78bfa",
        },
        {
          name: "Layer Select Keys",
          description: "Located along the top of the fader bay, the Layer keys (L1–L6) switch which set of channels the 24 physical faders control. The motorized faders move to match the new layer. Layer 1 is typically input channels 1–24. Layers 2–6 can address expansion channels, mix buses, FX returns, and DCAs. Check the LCD strips to confirm which channel is under each fader when switching layers.",
          color: "#fbbf24",
        },
      ],
    },
  },

  {
    id: "layers",
    icon: "📚",
    title: "Layers",
    color: "#84c8ff",
    content: {
      type: "layers",
      layers: [
        {
          name: "Layer 1 — Input Channels 1–24",
          summary: "The default working layer. Each of the 24 physical faders controls one of the local mic/line input channels (the XLR inputs on the rear panel). This is where you spend most of your time during a service.",
        },
        {
          name: "Layer 2 — Input Channels 25–48",
          summary: "Channels 25–48 come from expansion sources — a connected stage box, the USB audio interface, or other digital connections. If you are using an SLink stage box with more than 24 inputs, those extra channels live here.",
        },
        {
          name: "Layer 3 — Mix Buses and FX Returns",
          summary: "This layer typically shows the 12 configurable mix buses (aux and group masters) plus the 8 stereo FX return channels. Use this layer to adjust overall monitor mix levels or to control FX return levels without hunting through menus.",
        },
        {
          name: "Layers 4–6 — Customizable",
          summary: "These layers are fully user-configurable. Your head engineer may assign DCAs, matrix bus masters, or alternate channel views here. Ask your team lead what is on these layers for your specific setup before making changes.",
        },
      ],
      tips: [
        "Always glance at the LCD strip displays when switching layers — they show the channel name so you know what is under each fader.",
        "Motorized faders move automatically when you switch layers. Keep your hands off the faders for a moment after pressing a Layer key.",
        "If you press a blue Mix key and all faders seem to do nothing to the house sound, you are in Sends on Faders mode. Press the Mix key again to return to your normal LR layer view.",
        "Layer assignments are saved with the Show file. Your head engineer should document what is on each layer and label them with SoftKey shortcuts if possible.",
        "You can assign the same channel to more than one layer — useful if you want a critical channel (like the lead vocal) accessible on multiple layers.",
      ],
    },
  },

  {
    id: "checklist",
    icon: "✅",
    title: "Pre-Service Checklist",
    color: "#7da4ff",
    content: {
      type: "checklist",
      checklists: [
        {
          title: "Amplifiers and powered speakers are OFF",
          description: "Always start with amps off. Powering the console while amps are on can send a startup thump through the speakers and damage drivers.",
        },
        {
          title: "Power on the SQ-6",
          description: "Press the power button. The console boots in approximately 30 seconds. Motorized faders will initialize and move to their recalled positions — keep hands clear.",
        },
        {
          title: "Load the correct Show file",
          description: "On the touchscreen go to Utility > Shows > Load. Select the current service show file. If unsure which show to load, ask your head engineer before proceeding.",
        },
        {
          title: "Recall the starting scene",
          description: "Go to Scenes and recall your baseline scene (e.g., 'Sunday AM Start'). This sets all routing, processing, and levels to a known-good state.",
        },
        {
          title: "Confirm Layer 1 is active and faders are at unity",
          description: "Check that Layer 1 is selected and that channel faders are in their expected positions. The main LR master fader should be at 0 dB (unity, the 'U' mark).",
        },
        {
          title: "Verify all channels are unrouted from LR",
          description: "Before soundcheck, confirm that only intended channels are routed to LR. This prevents surprise noise when amps come up.",
        },
        {
          title: "Power on amplifiers and powered speakers",
          description: "Bring up amps and powered monitors last, and start them at low output. Slowly bring them to operating level after confirming no loud noise is present in the mains.",
        },
        {
          title: "Perform a pre-service soundcheck — inputs",
          description: "Have each performer play or speak at performance level. Press Sel on each channel and adjust the preamp Gain until the channel meter peaks consistently around 0 dBVU. No red clip lights.",
        },
        {
          title: "Build monitor mixes",
          description: "Press each blue Mix key to enter Sends on Faders for that monitor. Adjust send levels per performer request. Exit each mix by pressing the Mix key again.",
        },
        {
          title: "Check talkback",
          description: "Press the Talk key and confirm the talkback signal reaches the desired outputs (stage monitors). Confirm it is routed only to monitors, not the house speakers.",
        },
        {
          title: "Set mute groups and SoftKeys",
          description: "Confirm mute groups are in the correct state (none accidentally active). Test any SoftKey functions your team uses (e.g., scene recall, tap tempo).",
        },
        {
          title: "Final mix check — house speakers",
          description: "Play a reference source (worship playback track or have a vocalist warm up) and confirm the main LR mix sounds balanced and at an appropriate level. Check for any hum, noise, or phasing issues.",
        },
      ],
    },
  },

  {
    id: "channel-setup",
    icon: "🎤",
    title: "Setting Up a Channel",
    color: "#ff8a72",
    content: {
      type: "steps",
      steps: [
        {
          title: "Step 1 — Connect the source",
          content: "Plug the microphone or DI box into the appropriate XLR input on the rear panel (for local inputs) or on the stage box. Note the input number so you know which channel strip on Layer 1 to select.",
        },
        {
          title: "Step 2 — Select the channel",
          content: "Press the Sel (Select) key on the channel strip. The channel strip lights up and the touchscreen opens that channel's processing view. You will see tabs across the top of the screen: Preamp, HPF, Gate, PEQ, Comp, Delay.",
        },
        {
          title: "Step 3 — Set phantom power if needed",
          content: "On the Preamp tab, enable 48V phantom power if the microphone requires it (condenser mics, most DI boxes). Do NOT enable phantom power for dynamic mics or ribbon mics. Always check with your gear list.",
        },
        {
          title: "Step 4 — Set the analog gain",
          content: "Have the performer play or speak at their loudest performance level. Adjust the Gain knob (on the Preamp tab or using the encoder) until the channel strip meter peaks around 0 dBVU consistently. The meter has a green zone (healthy signal), a yellow zone (approaching loud), and red (clip — reduce gain immediately). Aim for green peaks that occasionally touch yellow.",
        },
        {
          title: "Step 5 — Enable the High-Pass Filter",
          content: "Press the HPF tab and enable the filter. Set the frequency to 80–100 Hz for vocal mics, 120–150 Hz for close-mic instruments, or leave lower for instruments that need low-end (kick drum, bass DI). The HPF removes low-frequency rumble and handling noise that causes feedback and muddiness.",
        },
        {
          title: "Step 6 — Name the channel",
          content: "On the touchscreen, hold the channel name area to rename it (e.g., 'Lead Vox', 'Kick', 'Piano L'). You can also set a color. Named channels make it much easier to navigate the console quickly during a service.",
        },
        {
          title: "Step 7 — Route to LR",
          content: "Press the Routing tab on the touchscreen (or hold the channel Sel key and press the LR assign button). Confirm the channel has a checkmark or lit indicator for LR. The channel will now contribute to the main house mix.",
        },
        {
          title: "Step 8 — Bring up the channel fader",
          content: "Raise the channel fader to the unity (0 dB / U) mark as a starting position. Then adjust up or down to fit the mix. Never use the fader to correct a gain problem — always fix gain at the Preamp level first.",
        },
        {
          title: "Step 9 — Add the channel to monitor mixes",
          content: "Press a blue Mix key (e.g., Mix 1 for the drummer's monitor). The faders switch to Sends on Faders mode. Raise the fader for this channel to the level the drummer requests. Press the Mix key again to exit. Repeat for each monitor that needs this source.",
        },
        {
          title: "Step 10 — PAFL check",
          content: "Press the PAFL key on the channel strip. Put on the engineer headphones and listen to the isolated signal. Confirm it sounds clean, at the correct level, and free of noise or distortion. Press PAFL again to release it.",
        },
      ],
    },
  },

  {
    id: "processing",
    icon: "⚙️",
    title: "Signal Chain",
    color: "#a78bfa",
    content: {
      type: "processing",
      chain: [
        {
          name: "Preamp",
          details: "The analog front end of the channel. Controls: Gain (adjusts input sensitivity; set this carefully for each source), +48V phantom power (required for condenser mics — never enable on ribbon mics), -20 dB Pad (attenuates very loud sources like kick drum direct), and Polarity flip (reverses signal phase; useful for phase-alignment of close and overhead mics). This is the only analog stage — everything after this is digital.",
        },
        {
          name: "HPF (High-Pass Filter)",
          details: "A variable-frequency filter that cuts everything below the set frequency. Enabling it removes low-end rumble, stage vibration, handling noise, and wind. Standard setting: 80–100 Hz for vocals, 120–150 Hz for snare or guitar, lower for instruments with genuine low-frequency content. Always enable the HPF as a starting point and only disable it if there is a musical reason. A disabled HPF on a vocal mic is one of the most common causes of feedback.",
        },
        {
          name: "Gate",
          details: "A noise gate that silences the channel when the signal falls below a threshold. Useful for muting a drum mic between hits or cutting bleed from a vocal mic when the singer is not singing. Controls: Threshold (signal level below which the gate closes), Attack (how quickly it opens), Hold (how long it stays open after the signal drops), Release (how slowly it closes), Depth (how much it attenuates — 50 dB depth means the channel is nearly silent when gated). The sidechain can be triggered by a different signal than the one being gated.",
        },
        {
          name: "PEQ (Parametric Equalizer)",
          details: "A 4-band fully parametric EQ with an RTA (real-time analyzer) overlay showing the frequency content of the channel. Each band has: Frequency (which frequency to boost or cut), Gain (how much, in dB), Q (how narrow or wide the adjustment). HF and LF bands have shelf and bell options. Use the PEQ to correct tonal problems (a nasal vocal, a boomy guitar), not as a volume control. The built-in RTA makes it easy to identify problem frequencies visually.",
        },
        {
          name: "Compressor",
          details: "Reduces the dynamic range of the channel — quieter sounds stay closer in level to louder ones. Controls: Threshold (level above which compression starts), Ratio (how much it compresses — 2:1 is gentle, 10:1 is heavy), Attack (how fast it responds), Release (how fast it stops), Makeup Gain (restores output level after compression), and Parallel Dry/Wet blend. Two modes: RMS (looks at the average signal level — smooth and musical, good for vocals) and Peak (reacts to transients — tighter, good for drums). Use light compression (2:1 to 4:1 ratio) as a starting point.",
        },
        {
          name: "Delay",
          details: "Adds a per-channel delay (time offset). Not an echo effect — this is used for time-alignment. If a speaker cabinet on stage is physically closer to the audience than your main speakers, the stage amp reaches the audience first and the mains sound late. Adding a short delay to the main speaker output or the channel aligns the arrivals. Values are typically in milliseconds. Most volunteers will not need to adjust this — leave it at 0 ms unless instructed.",
        },
        {
          name: "Pan / Balance",
          details: "Positions the channel in the stereo field between the left and right outputs. Center pan sends equal signal to both. Left or right pan shifts the channel toward that side. In church environments, most sources are panned center or near-center. Hard panning is used for stereo instruments (keyboard left/right, stereo guitar). The Pan control is on the channel strip surface (the knob above the fader) or on the touchscreen.",
        },
        {
          name: "Channel Fader",
          details: "The primary level control for the channel's contribution to the mix. Unity (0 dB, marked 'U') is the neutral starting position. Moving the fader up or down from unity adjusts the channel volume in the mix. The fader should be used to blend levels between sources — it is not for correcting a gain problem. Keep faders within a few dB of unity if possible; if a fader is at maximum and the source is still too quiet, the preamp gain needs to be increased.",
        },
        {
          name: "Routing",
          details: "Determines which mix buses, groups, and outputs receive this channel's signal. A channel must be explicitly routed to LR to appear in the house mix. It must be routed to an aux mix to appear in a monitor. Use the Routing tab on the touchscreen or hold Sel and press the assign button for each bus. Channels can be routed to multiple destinations simultaneously — e.g., a vocal can go to LR, a monitor aux, and a recording bus at the same time.",
        },
      ],
    },
  },

  {
    id: "fx",
    icon: "✨",
    title: "Effects (FX)",
    color: "#f472b6",
    content: {
      type: "fx",
      fxTypes: [
        {
          name: "SMR Reverb",
          summary: "The flagship algorithmic reverb included with the SQ-6. Models a physical acoustic space — hall, room, plate, and chamber programs. Use it on vocals to add depth and size, simulating the sound of a room. Key parameters: Room Size (how large the space sounds), Pre-Delay (gap between the dry sound and the reverb — small amounts create separation and clarity), Decay Time (how long the reverb tail rings), and Damping (reduces high-frequency content in the tail, making it warmer). A very short reverb (0.5–1.0 s decay) on vocals sounds natural; a long reverb (2–4 s) sounds dramatic. Start subtle and add more only if the mix sounds dry.",
        },
        {
          name: "Gated Reverb",
          summary: "A reverb that is cut off abruptly by a gate, creating the punchy, explosive reverb sound famous in 1980s pop and rock production. Almost exclusively used on snare drum in live applications. The reverb builds up and then stops sharply rather than fading naturally. Use sparingly — it is a stylistic choice, not a corrective tool.",
        },
        {
          name: "Stereo Tap Delay",
          summary: "A stereo echo effect that repeats the input signal after a set time interval. Tempo-syncable so the echoes fall on the musical beat. Uses: add rhythmic interest to a guitar or vocal, create a slap-back echo on vocals for a vintage feel, or fill sonic space in a sparse mix. Key parameters: Delay Time (set it to match the song tempo), Feedback (how many repeats occur — high values create infinite repeats, keep it moderate), Mix (wet/dry ratio — usually keep this low so echoes do not compete with the dry signal), and Ping-Pong (alternates echoes left and right for a wider stereo effect).",
        },
        {
          name: "ADT (Automatic Double Tracking)",
          summary: "Simulates the studio technique of recording a performance twice and blending the takes — making a single vocal sound like two singers in unison. Creates a subtle width and thickness without obvious processing. Useful for making a single vocalist sound fuller without reverb. The modulation amount controls how different the 'double' sounds from the original.",
        },
        {
          name: "Blue Chorus",
          summary: "A classic chorus effect based on the Roland RE-201 sound-on-sound design. A chorus creates a subtle detuned copy of the signal and blends it with the dry sound, producing a shimmering, widened sound. Commonly used on electric guitars, keyboards, and backing vocals. Key parameters: Rate (speed of the detuning cycle), Depth (how much detuning occurs), and Mix.",
        },
        {
          name: "Symphonic Chorus",
          summary: "A lush, multi-voice chorus that creates a rich, ensemble-like quality. Less subtle than the Blue Chorus — adds significant harmonic complexity. Used on pads, strings, and acoustic instruments to add fullness. Can make a keyboard or acoustic guitar sound much larger in the mix.",
        },
        {
          name: "Flanger",
          summary: "A sweeping jet-plane whoosh effect created by mixing the signal with a slightly delayed copy of itself and slowly varying the delay time. More pronounced and obvious than chorus. Use sparingly in church settings — it works on electric guitar or as a special effect on a specific song rather than as a general effect.",
        },
        {
          name: "Phaser",
          summary: "Creates a sweeping, phase-cancellation effect similar to flanger but smoother and less dramatic. Adds movement and interest to sustained instruments. Often used on electric piano or acoustic guitar. Like flanger, use it as a stylistic choice for specific songs rather than as a blanket effect.",
        },
      ],
    },
  },

  {
    id: "troubleshoot",
    icon: "🔧",
    title: "Troubleshooting",
    color: "#ef4444",
    content: {
      type: "troubleshoot",
      problems: [
        {
          question: "I cannot hear anything in the house speakers",
          answer: "Work through this checklist in order: (1) Confirm the amplifiers and powered speakers are powered on. (2) Check that the main LR master fader is up (right side of console). (3) Make sure the channel fader is up. (4) Confirm the channel is routed to LR — press Sel on the channel and check the Routing tab. (5) Confirm the channel is not muted — the Mute key should not be lit orange. (6) Confirm no mute group is active. (7) Check the channel meter — is signal reaching the channel at all? If the meter shows no movement, the problem is upstream of the console (bad cable, mic off, phantom power needed).",
        },
        {
          question: "Moving a fader has no effect on the house speakers",
          answer: "You are most likely in Sends on Faders mode. When you press a blue Mix key, all 24 faders switch to control sends to that monitor/aux mix, not the house LR. Press the active (lit) Mix key again to return to normal LR mode. Check the top of the touchscreen — it should say 'LR' when in normal mode. Also verify you are on the correct layer (Layer 1 for input channels).",
        },
        {
          question: "A channel is distorting or sounding harsh",
          answer: "The most common cause is gain too high. Press Sel on the channel, go to the Preamp tab, and check for the red clip indicator at the top of the meter. If clipping, reduce the Gain until peaks hit around 0 dBVU without clipping. Also check that the -20 dB Pad is not needed (for a loud source like a kick drum). If the signal is clean at the preamp but still sounds harsh, check the PEQ for excessive high-frequency boost.",
        },
        {
          question: "Feedback (ringing or howling) from monitors or house speakers",
          answer: "Immediate action: reduce the gain of the channel that is feeding back, or pull the monitor master fader down. Then investigate: (1) Confirm the HPF is enabled on the channel — low-frequency buildup is a primary cause of feedback. (2) Reduce the monitor send level for the problem channel. (3) Use the GEQ on the monitor mix (via Fader Flip mode) to identify and notch out the feedback frequency. (4) Reposition the monitor wedge so the microphone is in the monitor's null zone (pointing away from the speaker). (5) Do not increase the preamp gain to compensate for reduced monitor level.",
        },
        {
          question: "All faders appear stuck at minimum when I switch layers",
          answer: "This is not a malfunction — it is the motorized faders moving to match the layer positions. Wait a moment for the faders to initialize. If a fader appears stuck, press Sel on that channel and check if the channel has been set to a very low level. Also check that you are on the intended layer — the LCD strip displays show the channel name so you can confirm.",
        },
        {
          question: "The channel shows signal but the performer says they cannot hear themselves in the monitor",
          answer: "You need to add the channel to the monitor's mix. Press the blue Mix key for their monitor (e.g., Mix 1 for the drummer). The faders switch to Sends on Faders for that mix. Find the channel strip for the performer's source and raise its fader. Exit Sends on Faders by pressing the Mix key again. Also confirm the send is set to Pre-Fader mode so the monitor is independent of the main fader.",
        },
        {
          question: "The touchscreen is not responding or seems frozen",
          answer: "Try a single firm press — the touchscreen is capacitive and requires a deliberate touch. If a parameter is highlighted yellow, use the encoder knob to change it rather than trying to drag on the screen. If the screen is truly frozen, check if a process is still loading (a scene recall or show load can cause a brief pause). If the problem persists, save your scene and reboot the console — the SQ-6 will recall its last state on restart.",
        },
        {
          question: "A scene recall changed settings I did not want changed (gain, routing, etc.)",
          answer: "Scene recall loads everything in the snapshot unless filtered. To prevent gain from being overwritten: set up a Recall Filter (Scenes > Recall Filter) to exclude preamp gain from being recalled. To protect specific channels: use Channel Safe to mark individual channels as immune to scene recall. Ask your head engineer to configure these protections in the baseline show file.",
        },
        {
          question: "The GEQ faders are not doing anything / faders are showing wrong controls",
          answer: "You have pressed the GEQ Fader Flip key accidentally. In this mode, faders control the 28-band graphic EQ on the selected mix — not channel levels. Press the Fader Flip key again to exit and restore normal fader assignments. The Fader Flip key is near the master section.",
        },
        {
          question: "There is a loud thump or pop when powering up or down",
          answer: "The power sequence is incorrect. Always power amplifiers and powered speakers ON last and OFF first. The SQ-6 should be fully booted and at its operating state before amps come up. Power down amps before shutting off the console. If a thump still occurs at normal amp-last startup, check if any channel faders are at a high level or if a mute group should be engaged during startup.",
        },
        {
          question: "The USB drive is not recording or I cannot find the recording",
          answer: "Confirm the USB drive is formatted as FAT32 (not NTFS or exFAT). Insert the drive and go to the SQ-Drive page on the touchscreen. The console must be set to record before pressing the record button — configure the source channels and format first. Recordings are saved to the drive root in a folder named SQ. Check the drive has sufficient free space.",
        },
        {
          question: "I accidentally changed something and I do not know what",
          answer: "If the change happened recently, recall the current scene (Scenes > Recall) without saving first — this restores the last-recalled scene state. If you have already saved over the scene, load the baseline show file. Going forward, always recall the latest scene before making large changes, and save a numbered scene after any intentional change so you have a history to roll back to.",
        },
      ],
    },
  },

  {
    id: "tips",
    icon: "💡",
    title: "Best Practices",
    color: "#34d399",
    content: {
      type: "tips",
      categories: [
        {
          title: "Gain Staging",
          notes: [
            "Gain staging is the single most important skill. Poor gain structure is the root cause of most noise, distortion, and feedback problems.",
            "Set the preamp gain with the performer playing or singing at their loudest. The channel meter should peak around 0 dBVU — the 0 mark on the strip meter. This equals -18 dBFS internally, leaving 18 dB of digital headroom.",
            "Keep channel faders at or near unity (0 dB, the 'U' mark) when setting gain. This gives you an accurate reference for the overall mix level.",
            "If you need more volume in the mix after proper gain staging, raise the fader. If you need less, lower the fader. Never chase volume by cranking the preamp gain.",
            "A red clip indicator at the preamp means the analog signal is clipping before any processing can help. Reduce gain immediately.",
          ],
        },
        {
          title: "Monitor Mix Workflow",
          notes: [
            "Build monitor mixes during soundcheck, not during the service. Have each performer in position and playing before you finalize their mix.",
            "Use Pre-Fader sends for all monitor aux buses. This means the performer's monitor stays consistent even when you adjust their fader in the main house mix.",
            "Always press the correct Mix key before adjusting sends. Double-check the touchscreen header to confirm which mix is in sends-on-faders mode.",
            "Set a reasonable maximum level for monitor sends. If a monitor is already at maximum and the performer wants more, the problem is usually gain (set it higher at the preamp) or HPF (low-end buildup is eating headroom).",
            "The performer's best monitor mix is often different from what sounds good to the engineer. Let them ask for what they need — do not guess.",
          ],
        },
        {
          title: "Using the Touchscreen",
          notes: [
            "The touchscreen shows whatever channel is currently selected (Sel key lit). Only one channel or mix is in focus at a time.",
            "Use the encoder to adjust highlighted (yellow) parameters rather than trying to drag on the screen. The encoder is faster and more precise for continuous knob adjustments.",
            "Swipe left and right on the screen to navigate between tabs (Preamp, HPF, Gate, PEQ, Comp, Delay) without taking your hand off the surface.",
            "Double-tap a parameter on the screen to reset it to its default value. This is the fastest way to undo an accidental change.",
            "Use the RTA (real-time analyzer) overlay on the PEQ page to identify which frequencies are dominant in a signal before applying EQ cuts.",
          ],
        },
        {
          title: "Scene and Show Management",
          notes: [
            "Save a numbered scene after every significant change during a service. Use descriptive names: 'Pre-Service', 'Sermon', 'Final State'. This gives you rollback points.",
            "Use Recall Filters to prevent scene recalls from overwriting preamp gains. Gain is often set differently each week based on different performers and can take time to re-dial.",
            "Use Channel Safes to protect the channels that are most time-consuming to re-configure (lead vocal, piano, etc.).",
            "Load the baseline Show file at the start of every service — never start from a partially-modified show from a previous week without first confirming its state.",
            "After a service, save a final scene marked with the date so future operators can review a working starting point.",
          ],
        },
        {
          title: "General Live Sound",
          notes: [
            "Enable the HPF on every channel by default. Disable it only if the instrument genuinely needs low-frequency content (bass DI, kick drum). HPF removes rumble and feedback buildup.",
            "Mute channels that are not in use. A mic sitting on a stand with no performer generates noise and potential feedback that adds up across many channels.",
            "Use PAFL (headphone monitoring) to diagnose any channel problem before it reaches the house speakers. Press PAFL, put on the headphones, and hear the isolated channel.",
            "Less is more with EQ and effects. Start with a flat EQ and cut problem frequencies rather than boosting. Use reverb subtly — a congregation will not notice a little reverb but will notice too much.",
            "Watch the main LR meters throughout the service. If the mix is consistently hitting the top of the meter, pull back individual channel faders rather than lowering the master.",
          ],
        },
        {
          title: "Safety and Startup",
          notes: [
            "Power order: amps and powered speakers on LAST, off FIRST. Every time, without exception. This prevents pops and thumps that damage speaker drivers.",
            "Never connect or disconnect XLR cables while phantom power (+48V) is engaged on that channel. Always disable phantom power before plugging or unplugging a microphone.",
            "If you hear an unexpected loud noise, pull the master fader down immediately — then diagnose. Protect the speakers first.",
            "Label everything. Named channels, colored channel strips, and labeled patch panels make troubleshooting faster under pressure.",
            "When in doubt, do not touch it. If you are unsure about a setting, use PAFL to listen to the channel privately and ask your head engineer before making changes to routing or processing.",
          ],
        },
      ],
    },
  },

  {
    id: "glossary",
    icon: "📘",
    title: "Glossary",
    color: "#c08bff",
    content: {
      type: "glossary",
      terms: [
        {
          term: "Aux",
          definition: "Short for 'auxiliary.' An additional mix bus separate from the main LR mix. Used for monitor mixes, IEM feeds, or effects sends. Each aux mix is independently controlled and can be pre-fader or post-fader.",
        },
        {
          term: "Bus",
          definition: "An internal audio pathway that collects signals from multiple channels and combines them. The SQ-6 has 36 buses total: 1 main LR stereo bus, 12 mix buses (configurable as aux or group), 3 stereo matrix buses, and 4 FX send buses.",
        },
        {
          term: "Compressor",
          definition: "A dynamics processor that reduces the volume difference between the loudest and quietest parts of a signal. Makes vocals more consistent in level. Controlled by threshold (when compression starts), ratio (how much compression), attack, release, and makeup gain.",
        },
        {
          term: "DCA",
          definition: "Digitally Controlled Amplifier. A virtual grouping tool where no audio passes through — it is purely a control mechanism. Assigning channels to a DCA allows one fader to adjust all assigned channels proportionally. Muting a DCA mutes all its channels at once. The SQ-6 has 8 DCAs.",
        },
        {
          term: "dBFS",
          definition: "Decibels relative to Full Scale. The measurement scale used in digital audio. 0 dBFS is the absolute maximum — any signal above this clips (distorts digitally). The SQ-6 meters read in dBFS. Aim to peak at -18 dBFS (the 0 dBVU mark) to preserve headroom.",
        },
        {
          term: "dBVU",
          definition: "Decibels relative to Volume Units. A traditional analog reference level. On the SQ-6, 0 dBVU equals -18 dBFS internally. This is the target peak level for gain staging — it keeps signals healthy while leaving 18 dB of digital headroom.",
        },
        {
          term: "Fader",
          definition: "The sliding level control on each channel strip. Moving it up increases the channel's level in the mix; moving it down decreases it. The SQ-6 uses motorized faders that move automatically when layers change or Sends on Faders mode is activated.",
        },
        {
          term: "Fader Flip",
          definition: "A mode that temporarily reassigns the 24 motorized faders to control the bands of the graphic EQ (GEQ) on the selected mix bus. Low-frequency bands appear on the left faders, high-frequency on the right. Press the Fader Flip key again to exit.",
        },
        {
          term: "Gain",
          definition: "The analog input sensitivity control on the preamp stage. Setting gain correctly is the foundation of all other processing. Aim for channel meter peaks at 0 dBVU (the 0 mark) with the performer at their loudest. Gain should be set once during soundcheck and not adjusted during performance except to correct a problem.",
        },
        {
          term: "Gate",
          definition: "A noise gate that silences a channel when the signal drops below a threshold level. Used to mute drum mics between hits or prevent a vocal mic from picking up bleed when the singer is not singing. Key controls: threshold, attack, hold, release, depth.",
        },
        {
          term: "GEQ",
          definition: "Graphic Equalizer. A 28-band equalizer available on each mix bus output. Each band is at a fixed frequency (31 Hz to 16 kHz, in 1/3-octave steps) with up to +/-12 dB of boost or cut. Used to tune monitor mixes and address feedback frequencies. Accessed via Fader Flip mode on the surface.",
        },
        {
          term: "Group",
          definition: "One of the 12 configurable mix buses set to Group mode. Channels assigned to a group are all controlled together through the group fader, which feeds into the LR or other outputs. Common groups: Drums, Vocals, Band. Unlike an aux, a group does not have variable per-channel send levels — channels are simply assigned on or off.",
        },
        {
          term: "Headroom",
          definition: "The gap between the current signal level and the maximum (0 dBFS) before digital clipping. The SQ-6 is designed to operate at 0 dBVU = -18 dBFS, providing 18 dB of headroom. Headroom allows for unexpected loud moments (a singer belting a high note, a drummer hitting hard) without distortion.",
        },
        {
          term: "HPF",
          definition: "High-Pass Filter. A filter that allows frequencies above a set point to pass through while cutting everything below. Removes low-frequency rumble, handling noise, and stage vibration. Standard starting point: 80–100 Hz on vocal channels. Enable the HPF on every channel as a default.",
        },
        {
          term: "IEM",
          definition: "In-Ear Monitor. Small earphones worn by performers on stage that deliver a custom personal monitor mix. IEMs use a wireless transmitter and receiver. The mix fed to each IEM comes from a dedicated aux mix on the console, set up in the same way as a monitor wedge mix.",
        },
        {
          term: "Layer",
          definition: "A set of assignments that maps the 24 physical fader strips to a different group of channels or buses. The SQ-6 has 6 layers. Pressing a Layer key causes the motorized faders to move to match the new layer positions. Layer 1 is typically input channels 1–24.",
        },
        {
          term: "LR",
          definition: "Left-Right. The main stereo house mix output fed to the front-of-house speakers. The LR bus receives channels that have been routed to it. The LR master fader is on the right side of the console (the master section).",
        },
        {
          term: "Matrix",
          definition: "A secondary output bus that receives signal from mix buses (not directly from input channels). Used to feed delay speakers, lobby speakers, video broadcast, or overflow rooms. The SQ-6 has 3 stereo matrix buses.",
        },
        {
          term: "Mute Group",
          definition: "A logic control that silences a group of channels simultaneously with one button. The SQ-6 has 8 mute groups. Unlike a DCA, a mute group only provides on/off muting — it has no fader for level control. Useful for muting all stage mics between songs.",
        },
        {
          term: "PAFL",
          definition: "Pre/After Fade Listen. Pressing the PAFL key on any channel routes that channel to the engineer's headphone output for isolated monitoring. Pre-Fader mode lets you hear the channel signal regardless of fader position. After-Fader mode hears the channel as it contributes to the mix. Essential for diagnosing channel problems without affecting the house.",
        },
        {
          term: "Pan",
          definition: "Positions a mono source between the left and right outputs in the stereo field. Center sends equal signal to both sides. A source panned left appears only in the left speaker. In a typical church setting, most sources are centered or near-center.",
        },
        {
          term: "Phantom Power",
          definition: "+48V DC voltage sent through an XLR cable to power condenser microphones and many DI boxes. Required for most condenser mics; never enable on ribbon mics (it can destroy them). Enable only after the cable is connected and disable before disconnecting. Toggle on each channel's Preamp tab.",
        },
        {
          term: "PEQ",
          definition: "Parametric Equalizer. A 4-band EQ where each band's frequency, gain, and Q (width) are fully adjustable. The SQ-6 includes an RTA (real-time analyzer) overlay that displays the frequency content of the channel while you adjust the EQ curve. Used to correct tonal imbalances or cut feedback frequencies.",
        },
        {
          term: "Pre-Fader",
          definition: "An aux send configuration where the send to a monitor mix is tapped before the channel fader. This means adjusting the channel fader in the main house mix does not affect the performer's monitor. Pre-fader is the standard setting for all monitor and IEM auxiliary mixes.",
        },
        {
          term: "Post-Fader",
          definition: "An aux send configuration where the send to a mix tracks the channel fader position. If you lower the fader, the aux send level also decreases. Used for FX sends — if a vocal is quieter in the mix, you want less reverb too.",
        },
        {
          term: "Recall Filter",
          definition: "A setting that prevents certain parameter types from being overwritten when a scene is recalled. For example, enabling a Recall Filter for preamp gain means scene recalls will never change your gain settings. Essential for protecting time-consuming soundcheck work.",
        },
        {
          term: "Routing",
          definition: "The process of assigning a channel's signal to one or more output destinations — LR, a mix bus, a matrix, or a recording output. On the SQ-6, routing is configured per-channel on the Routing tab of the touchscreen, or via the Sel + Mix key shortcut on the surface.",
        },
        {
          term: "RTA",
          definition: "Real-Time Analyzer. A visual display overlaid on the PEQ screen showing the frequency spectrum of the current channel's signal in real time. Green bars show which frequencies are present and at what level. Use it to find problem frequencies before applying EQ cuts.",
        },
        {
          term: "SafeScene",
          definition: "Another name for channel safes or recall filters that protect specific channels or parameters from being changed by a scene recall. A channel marked as Safe is completely immune to any scene recall changes.",
        },
        {
          term: "Scene",
          definition: "A snapshot of all (or selected) mixer settings stored in memory. Recalling a scene instantly restores levels, routing, processing, and names to their saved state. Up to 300 scenes per show. Use scenes to save the console state between events and to recall known-good starting points.",
        },
        {
          term: "Sends on Faders",
          definition: "A mode activated by pressing a blue Mix key. All 24 motorized faders switch to display and control the send levels from each channel to the selected mix bus. The master fader controls the mix master level. Press the Mix key again to return to normal mode.",
        },
        {
          term: "Show",
          definition: "A master file that contains all scenes, global settings, recall filter configurations, and channel safe assignments for a production. Loading a Show loads its entire context. The SQ-6 can store multiple shows — one per venue, series, or event type.",
        },
        {
          term: "Sidechain",
          definition: "A secondary audio input that controls a processor rather than passing through it. On the SQ-6 gate, the sidechain input triggers the gate to open — you can use any signal (even from a different channel) to trigger the gate. For example, use the kick drum's direct out to trigger a gate on the kick's room mic.",
        },
        {
          term: "SLink",
          definition: "Allen and Heath's proprietary high-channel-count digital audio link. Used to connect AR, GX, or DX stage boxes (providing more physical inputs and outputs at the stage end) or the ME personal monitor mixing system.",
        },
        {
          term: "SoftKey",
          definition: "One of the 16 user-assignable illuminated buttons on the SQ-6 surface. Each can be configured to trigger any function: scene recall, tap tempo, DCA mute, mute group toggle, talkback, and more. SoftKey assignments are saved with the Show file.",
        },
        {
          term: "SQ-Drive",
          definition: "The USB-A recording and playback system on the SQ-6. Insert a FAT32-formatted USB drive into the rear USB-A port to record the stereo LR mix (or a multitrack session) directly to the drive without a computer. Also used to play back stereo audio for a virtual soundcheck.",
        },
        {
          term: "SQ-MixPad",
          definition: "The official Allen and Heath iPad and Android app for full remote control of the SQ-6 over a WiFi network. Engineers can adjust all channel processing, routing, levels, and routing from anywhere in the venue. Requires the console to be connected to a network router.",
        },
        {
          term: "SQ4You",
          definition: "Allen and Heath's performer monitor app for smartphones. Each performer connects to their specific aux mix and controls their own monitor blend — independently of the FOH engineer. Requires the console to be on a WiFi network.",
        },
        {
          term: "Talkback",
          definition: "A built-in microphone or XLR talkback input on the SQ-6 that allows the FOH engineer to speak through the monitor speakers or IEMs to communicate with performers on stage. The Talk key (momentary or latching) activates the talkback signal. Route it only to monitor mixes, never to the house LR.",
        },
        {
          term: "Unity",
          definition: "The 0 dB fader position, marked 'U' on the fader track. At unity, the fader neither boosts nor cuts the signal. It is the standard starting position for channel faders and the LR master. Building a mix from unity positions gives a predictable starting reference.",
        },
        {
          term: "XCVI Core",
          definition: "Allen and Heath's name for the SQ series' 96 kHz FPGA (Field-Programmable Gate Array) processing engine. The XCVI Core provides the computing power for all 48 input channels, all mix bus processing, 8 FX engines, optional DEEP plug-ins, and the sub-millisecond latency that makes the SQ-6 suitable for live performance.",
        },
      ],
    },
  },
];
