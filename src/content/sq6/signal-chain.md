---
title: Signal Chain
order: 6
---

### Preamp

The analog front end of the channel. Controls: Gain (adjusts input sensitivity; set this carefully for each source), +48V phantom power (required for condenser mics — never enable on ribbon mics), -20 dB Pad (attenuates very loud sources like kick drum direct), and Polarity flip (reverses signal phase; useful for phase-alignment of close and overhead mics). This is the only analog stage — everything after this is digital.

### HPF (High-Pass Filter)

A variable-frequency filter that cuts everything below the set frequency. Enabling it removes low-end rumble, stage vibration, handling noise, and wind. Standard setting: 80–100 Hz for vocals, 120–150 Hz for snare or guitar, lower for instruments with genuine low-frequency content. Always enable the HPF as a starting point and only disable it if there is a musical reason. A disabled HPF on a vocal mic is one of the most common causes of feedback.

### Gate

A noise gate that silences the channel when the signal falls below a threshold. Useful for muting a drum mic between hits or cutting bleed from a vocal mic when the singer is not singing. Controls: Threshold (signal level below which the gate closes), Attack (how quickly it opens), Hold (how long it stays open after the signal drops), Release (how slowly it closes), Depth (how much it attenuates — 50 dB depth means the channel is nearly silent when gated). The sidechain can be triggered by a different signal than the one being gated.

### PEQ (Parametric Equalizer)

A 4-band fully parametric EQ with an RTA (real-time analyzer) overlay showing the frequency content of the channel. Each band has: Frequency (which frequency to boost or cut), Gain (how much, in dB), Q (how narrow or wide the adjustment). HF and LF bands have shelf and bell options. Use the PEQ to correct tonal problems (a nasal vocal, a boomy guitar), not as a volume control. The built-in RTA makes it easy to identify problem frequencies visually.

### Compressor

Reduces the dynamic range of the channel — quieter sounds stay closer in level to louder ones. Controls: Threshold (level above which compression starts), Ratio (how much it compresses — 2:1 is gentle, 10:1 is heavy), Attack (how fast it responds), Release (how fast it stops), Makeup Gain (restores output level after compression), and Parallel Dry/Wet blend. Two modes: RMS (looks at the average signal level — smooth and musical, good for vocals) and Peak (reacts to transients — tighter, good for drums). Use light compression (2:1 to 4:1 ratio) as a starting point.

### Delay

Adds a per-channel delay (time offset). Not an echo effect — this is used for time-alignment. If a speaker cabinet on stage is physically closer to the audience than your main speakers, the stage amp reaches the audience first and the mains sound late. Adding a short delay to the main speaker output or the channel aligns the arrivals. Values are typically in milliseconds. Most volunteers will not need to adjust this — leave it at 0 ms unless instructed.

### Pan / Balance

Positions the channel in the stereo field between the left and right outputs. Center pan sends equal signal to both. Left or right pan shifts the channel toward that side. In church environments, most sources are panned center or near-center. Hard panning is used for stereo instruments (keyboard left/right, stereo guitar). The Pan control is on the channel strip surface (the knob above the fader) or on the touchscreen.

### Channel Fader

The primary level control for the channel's contribution to the mix. Unity (0 dB, marked "U") is the neutral starting position. Moving the fader up or down from unity adjusts the channel volume in the mix. The fader should be used to blend levels between sources — it is not for correcting a gain problem. Keep faders within a few dB of unity if possible; if a fader is at maximum and the source is still too quiet, the preamp gain needs to be increased.

### Routing

Determines which mix buses, groups, and outputs receive this channel's signal. A channel must be explicitly routed to LR to appear in the house mix. It must be routed to an aux mix to appear in a monitor. Use the Routing tab on the touchscreen or hold Sel and press the assign button for each bus. Channels can be routed to multiple destinations simultaneously — e.g., a vocal can go to LR, a monitor aux, and a recording bus at the same time.
