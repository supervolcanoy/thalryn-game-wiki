  
**THALRYN**

Full Game Specification Document

Version 1.0

Genre: Open-World Survival Horror

Perspective: First-Person / Third-Person (TBD)

Target Platforms: PC (Windows), Console (PlayStation 5, Xbox Series X|S)

Target Rating: M (Mature 17+)

# **Table of Contents**

# **1\. Game Overview**

## **1.1 Concept Summary**

Thalryn is an infinite, procedurally generated open-world survival horror game set within a cursed forest ecosystem. The player assumes the role of an animal control officer stranded in a vast, endlessly shifting wilderness. There is no scripted narrative; instead, environmental storytelling, emergent encounters, and systemic creature behavior drive the experience. The core gameplay loop centers on survival, exploration, resource gathering, crafting, and combat avoidance within a hostile, ever-changing world.

## **1.2 Genre**

Open-World Survival Horror with elements of exploration, crafting, and emergent storytelling.

## **1.3 Target Audience**

Players aged 17+ who enjoy survival horror games with deep crafting systems and atmospheric, non-linear exploration. Target audience includes fans of titles such as Subnautica, The Forest, and Darkwood.

## **1.4 Unique Selling Points**

* Truly infinite, procedurally generated world with no boundaries or loading screens between surface biomes.

* Deep environmental storytelling with zero scripted narrative.

* Grounded, physical horror with no digital glitch aesthetics.

* A world-ending boss encounter (The Hazard) triggered entirely by player choices.

* Multi-layered world with surface forest, Deep Undergrounds, and ultra-rare secret biomes.

* Asymmetric day/night gameplay with drastically different risk profiles.

## **1.5 Platform & Distribution**

| Attribute | Detail |
| :---- | :---- |
| Primary Platform | PC (Windows 10/11) |
| Console Targets | PlayStation 5, Xbox Series X|S |
| Distribution | Steam (PC), PlayStation Store, Xbox Store |
| Multiplayer | Single-player only (co-op TBD for future expansion) |
| Engine | TBD (Unreal Engine 5 or Unity recommended for procedural generation) |

# **2\. Core Gameplay Mechanics**

## **2.1 Core Gameplay Loop**

The central loop of Thalryn follows a survive-explore-craft-advance cycle:

* Dawn: Scout surroundings, plan routes, gather surface resources.

* Day: Explore new terrain, locate landmarks, mine materials, craft tools and defenses.

* Dusk: Return to shelter or establish a defensible position; prepare for nightfall.

* Night: Survive mutated creature spawns through stealth, fortification, or combat.

* Repeat with expanding range, deeper exploration, and higher-tier crafting.

## **2.2 Exploration**

The world is infinite and procedurally generated. Players navigate using environmental landmarks, crafted markers, and spatial memory. There is no minimap by default. A compass may be craftable. Exploration is rewarded with rare biomes, resources, lore fragments, and unique encounters.

* **Surface Exploration:** Traversal of the cursed forest, including biome transitions, ruins, clearings, and waterways.

* **Underground Exploration:** Accessing the Deep Undergrounds by breaching the surface with pickaxes or explosives.

* **Secret Biomes:** Ultra-rare locations such as the Obsidian City that appear with extremely low probability (0.01% per generated chunk cluster).

## **2.3 Resource Gathering**

Resources are the foundation of survival and progression. Players interact with the environment to gather materials:

| Resource | Source | Tool Required | Rarity |
| :---- | :---- | :---- | :---- |
| Wood | Trees (surface) | Axe / Hands (slow) | Common |
| Stone | Surface boulders | Pickaxe | Common |
| Slate | Shallow underground deposits | Pickaxe | Uncommon |
| Warped Slate | Deep underground veins | Reinforced Pickaxe | Rare |
| Glowing Crystals | Deep Underground caves | Pickaxe | Rare |
| Molten Soul | Deep Underground pools | Bucket | Very Rare |
| Oil Crystals | Deep Underground veins | Reinforced Pickaxe | Very Rare |
| Obsidian Fragments | Obsidian City biome | Obsidian Pickaxe | Ultra Rare |

## **2.4 Crafting System**

Crafting is performed through a radial menu or dedicated crafting interface. No crafting stations are required for basic items; advanced items require proximity to specific resources or locations.

### **2.4.1 Crafting Tiers**

| Tier | Examples | Requirements |
| :---- | :---- | :---- |
| Basic | Wooden axe, torch, wooden barricade, rope | Wood, stone; no station required |
| Intermediate | Stone pickaxe, slate knife, bucket, campfire | Slate, stone; crafting surface (flat rock) |
| Advanced | Reinforced pickaxe, obsidian blade, traps | Warped slate, crystals; workbench (crafted) |
| Legendary | Ultra-Bomb, Soul weapons (post-Hazard) | Molten soul, obsidian; special conditions |

### **2.4.2 Key Craftable Items**

* **Bucket:** Crafted from slate and wood. Used to collect and transport molten soul from underground pools.

* **Ultra-Bomb:** Created by fusing four buckets of molten soul. The only weapon capable of exposing The Hazard’s heart.

* **Torch:** Provides light during night. Attracts some creatures; repels others.

* **Barricades:** Wooden or reinforced barriers to block creature pathways.

* **Traps:** Spike traps, snares, and noise decoys crafted from various materials.

## **2.5 Combat**

Combat is available but deliberately punishing. The player is not a soldier; encounters should feel tense, resource-draining, and avoidable when possible.

* **Melee Weapons:** Axes, slate knives, obsidian blades. Melee combat is slow and stamina-intensive.

* **Ranged Weapons:** Thrown rocks, crafted spears, bow and arrows (late-game).

* **Stealth:** Crouching reduces noise. Mud and foliage can mask scent from scent-tracking creatures. Wind direction affects detection.

* **Environmental Combat:** Lure creatures into traps, off cliffs, or into molten soul pools.

## **2.6 Stealth Mechanics**

Stealth is a first-class mechanic. Each creature type has a distinct detection model:

* **Visual Detection:** Line-of-sight based. Affected by lighting, distance, and player movement speed. Crouching and staying in shadow reduces visual profile.

* **Audio Detection:** Footsteps, tool use, and breaking branches generate sound. Soft ground (mud, moss) is quieter. Sprinting is loud.

* **Scent Detection:** Certain creatures (e.g., Blind Bloodhounds) track by scent. Wind direction, mud coating, and water crossings affect scent trails.

# **3\. Game Rules & Conditions**

## **3.1 Win Condition**

The primary win condition is escape. An abandoned car spawns at a random location in the world. The player must locate the car, gather oil crystals from the Deep Undergrounds, refuel the vehicle, and drive to escape the forest. Upon escaping, the game displays an ending sequence and the player’s survival statistics.

## **3.2 Loss Condition**

The player loses when their health reaches zero. Death is permanent (roguelike permadeath). Upon death, the player may restart with a newly generated world or return to the title screen. No save-scumming is supported; the game uses a single auto-save slot that is deleted upon death.

## **3.3 Optional Boss Encounter**

Defeating The Hazard is not required to win, but provides the most powerful items in the game. The Hazard encounter is player-initiated through Soul Siren activation.

## **3.4 Difficulty Scaling**

Difficulty is organic and distance-based rather than menu-selected:

* Creatures near the player’s spawn point are fewer and weaker.

* The further the player travels from their spawn origin, the more frequent and dangerous encounters become.

* The Deep Undergrounds are inherently more dangerous than the surface at any distance.

* Night multiplies danger globally, regardless of distance.

## **3.5 Permadeath & Persistence**

Thalryn uses permadeath. When the player dies, their world is erased. Each playthrough generates a unique world. There is no meta-progression between runs; each attempt begins fresh with identical starting conditions.

## **3.6 Day/Night Cycle Rules**

| Phase | Duration (Real-Time) | Key Characteristics |
| :---- | :---- | :---- |
| Dawn | \~2 minutes | Creatures retreat. Safe window to move. Light gradually increases. |
| Day | \~10 minutes | Relative safety. Full visibility. Optimal for exploration and crafting. |
| Dusk | \~2 minutes | Warning period. Ambient audio shifts. Some creatures begin patrolling. |
| Night | \~10 minutes | Full darkness. Mutated creatures spawn aggressively. Maximum danger. |
| Midnight | Midpoint of night | Peak spawn intensity. Most dangerous creatures appear. |

A full day/night cycle lasts approximately 24 real-time minutes. Exact durations are tunable in development.

# **4\. Characters & Entities**

## **4.1 Player Character**

**Role:** Animal Control Officer

**Background:** A trained but ordinary government employee stranded in the cursed forest through unknown circumstances. Not a hero, soldier, or supernatural being. Survival depends on resourcefulness and caution.

### **4.1.1 Player Attributes**

| Attribute | Base Value | Description |
| :---- | :---- | :---- |
| Health (HP) | 100 | Depletes from attacks, falls, and environmental hazards. Regenerates slowly when not taking damage or through crafted healing items. |
| Stamina | 100 | Consumed by sprinting, melee attacks, mining, and chopping. Regenerates when idle or walking. |
| Hunger | 100 | Decreases over time. At 0, health begins to drain. Replenished by consuming foraged or hunted food. |
| Thirst | 100 | Decreases over time. At 0, stamina regeneration stops, then health drains. Replenished by water sources. |
| Sanity (Optional) | 100 | Exposure to darkness, creatures, and Soul Siren screams may reduce sanity. Low sanity causes visual/audio distortions. TBD based on playtesting. |

### **4.1.2 Inventory System**

The player has a limited-slot inventory (suggested: 20 slots). Stacking applies to common resources. Tools and weapons occupy one slot each. A hotbar of 4–6 quick-access slots allows fast switching during gameplay.

## **4.2 Creatures of Thalryn**

All creatures are grounded, physical beings. No digital glitches, holographic effects, or overtly supernatural visual distortions. Creatures are mutated, corrupted animals that feel biologically wrong rather than digitally broken.

### **4.2.1 Surface Creatures**

| Creature | HP | Detection | Behavior | Threat |
| :---- | :---- | :---- | :---- | :---- |
| Mutated Fox | 30 | Sound, Sight | Distorted calls. Hunts in pairs. Fast flanking attacks. Nocturnal. | Low–Med |
| Blind Bloodhound | 60 | Scent only | Tracks by scent over long distances. Slow but relentless. Loses trail in water. | Medium |
| Shadow Eagle | 40 | Sight (aerial) | Swoops from above in open clearings. Avoidable under tree cover. | Medium |
| Aberrant Deer | 80 | Sound, Sight | Appears passive until provoked. Charges with antler attack. Erratic pathing. | Med–High |
| Corrupted Bear | 150 | Scent, Sound | Territorial apex predator. Extremely dangerous in melee. Stealth-avoidable. | High |

### **4.2.2 Underground Creatures**

| Creature | HP | Detection | Behavior | Threat |
| :---- | :---- | :---- | :---- | :---- |
| Cave Crawler | 25 | Vibration | Small insectoid. Swarms in groups of 5–10. Weak individually, dangerous in numbers. | Low–Med |
| Soul Leech | 40 | Proximity | Attaches near molten soul pools. Drains HP over time. Must be manually removed. | Medium |
| Deep Stalker | 100 | Sound, Darkvision | Humanoid silhouette. Patrols abandoned mineshafts. Fast and aggressive when alerted. | High |

### **4.2.3 Obsidian City Creatures**

Obsidian City biomes contain unique enemy types significantly more dangerous than surface or standard underground creatures. Specific creature designs for this biome are TBD and should reflect the ancient, dark aesthetic of the ruins.

## **4.3 Soul Sirens**

Soul Sirens are obsidian pillars found primarily in Obsidian City biomes, with rare instances on the surface. They function as both lore objects and progression triggers.

* **Activation:** The player interacts with a Siren to activate it. Each activation releases a psychic scream that briefly stuns the player and attracts nearby enemies.

* **Counter:** The game tracks total Siren activations globally. After the fifth activation, The Hazard is summoned.

* **Visual Design:** Tall, smooth obsidian monoliths with faintly glowing purple veins. They emit a low hum audible from approximately 50 meters.

## **4.4 The Hazard (World Boss)**

**HP:** 10,000

**Trigger:** Summoned after five Soul Siren activations.

**Spawn Location:** Manifests at the base of massive cliff formations.

### **4.4.1 Spawn Sequence**

When The Hazard spawns, the player experiences temporary blindness (screen whiteout for 3–5 seconds), a deafening scream (audio distortion and temporary deafness), and the ground visibly cracks in a wide radius around the spawn point, flooding low areas with molten soul.

### **4.4.2 Combat Phases**

| Phase | HP Range | Behavior |
| :---- | :---- | :---- |
| Phase 1 | 10,000–8,000 | Sweeping limb strikes. Telegraphed, learnable patterns. Molten soul pools expand slowly. |
| Phase 2 | 8,000–6,000 | Ground-pound attacks with shockwaves. Spawns corrupted minions periodically. |
| Phase 3 | 6,000–4,000 | Increased aggression. Scream attacks that disorient the player. Arena shrinks with molten soul flooding. |
| Phase 4 | 4,000–2,000 | Begins consuming terrain. Environmental hazards intensify. Minion spawns increase. |
| Phase 5 | 2,000–0 | Full berserk mode. Fastest attacks. Smallest safe area. Player must detonate the Ultra-Bomb. |
| Phase 6 | Internal | Fakes death, traps player inside body. Navigate corridors, fight corrupted monsters, destroy heart/core. |

### **4.4.3 Defeating The Hazard**

The player must craft the Ultra-Bomb (four buckets of molten soul fused together) and detonate it near The Hazard during Phase 5\. The detonation triggers a fake death animation. The Hazard’s body then opens and the player is drawn inside, where they must navigate internal corridors, fight corrupted creatures, and destroy the exposed core/heart.

### **4.4.4 Rewards**

| Reward | Type | Description |
| :---- | :---- | :---- |
| Soul Sword | Melee Weapon | Extremely high damage melee weapon with a purple energy aura. |
| Soul Arrows | Ranged Ammo | Unlimited stack of high-damage arrows that track targets slightly. |
| Soul Shard | Unique Item | Indestructible. Capable of one-shotting any non-boss enemy. Single-use-per-enemy instant kill. |

# **5\. Game World & Environment**

## **5.1 World Generation**

The world of Thalryn is procedurally generated and infinite in all horizontal directions. Terrain generation uses noise algorithms (e.g., Perlin/Simplex noise) with layered biome distribution. The world loads in chunks around the player, with distant terrain streamed as needed. There are no hard borders.

## **5.2 Surface Biomes**

| Biome | Frequency | Characteristics |
| :---- | :---- | :---- |
| Dense Forest | Very Common | Thick canopy, limited sightlines, abundant wood. Default biome. |
| Dead Forest | Common | Leafless trees, grey terrain, reduced resources. Higher creature density at night. |
| Swamp / Wetland | Uncommon | Shallow water, mud (slows movement, masks scent), fog. Unique flora. |
| Rocky Highlands | Uncommon | Elevated terrain with exposed stone. Good vantage points. Cliff edges. |
| Clearings / Meadows | Uncommon | Open ground. High visibility but exposure to aerial predators. Occasional ruins. |
| Ruins / Structures | Rare | Remnants of unknown civilizations. Lore fragments, rare loot, environmental storytelling. |
| Obsidian City | Ultra Rare (0.01%) | Ancient obsidian ruins. Soul Sirens, exclusive creatures, unique materials. |

## **5.3 Deep Undergrounds**

Beneath the surface lies the Deep Undergrounds, an expansive cave network accessible by breaking through the ground with appropriate tools. The underground is a distinct gameplay zone with its own creature ecosystem, resources, and atmosphere.

### **5.3.1 Underground Features**

* **Underground Lakes:** Still, dark water bodies. May contain aquatic creatures. Water is drinkable but potentially hazardous.

* **Glowing Crystal Caverns:** Caves illuminated by bioluminescent crystals. Provide natural light. Crystals are harvestable.

* **Abandoned Mineshafts:** Pre-existing tunnels with rail tracks, old equipment, and lore. Patrolled by Deep Stalkers.

* **Molten Soul Pools:** Pools of purple, pulsating liquid. Deal damage on contact. Collectible via bucket for Ultra-Bomb crafting.

* **Oil Crystal Veins:** Required to refuel the abandoned car (win condition). Found deep underground, requiring significant excavation.

## **5.4 Obsidian City Biome (Detailed)**

The Obsidian City is a secret biome with a 0.01% spawn chance per chunk cluster. Multiple instances can exist across the infinite world. Visually distinct: towering black obsidian structures, crumbling walls, overgrown plazas, and an oppressive atmosphere.

### **5.4.1 Key Locations within Obsidian City**

* **Temple of Arackniss:** A massive spider-themed temple with intricate obsidian carvings. Contains unique loot and environmental puzzles.

* **Obsidian Glade:** An open courtyard partially reclaimed by nature. Contains Soul Sirens.

* **Crypt of Whispers:** Underground crypt beneath the city with audio-based horror elements and rare materials.

* **Collapsed Gates:** The former entrance to the city, now partially destroyed. Serves as a recognizable landmark.

* **Sunken Plazas:** Low-lying city areas overtaken by darkness and shadow. Extremely dangerous; high-tier loot.

## **5.5 Environmental Hazards**

* **Molten Soul:** Purple pulsating liquid. Deals 5 HP/second on contact. Cannot be traversed without special gear (TBD).

* **Falling:** Realistic fall damage. Falls from significant height can be lethal.

* **Drowning:** Extended submersion depletes a breath meter, then drains HP.

* **Darkness:** Complete darkness underground and during night. Without a light source, navigation is nearly impossible.

## **5.6 Navigation**

Navigation is intentionally disorienting to reinforce the feeling of being lost. No minimap or GPS is provided. Players orient using environmental cues such as sun/moon position, terrain landmarks, and craftable markers (e.g., trail blazes on trees). A craftable compass provides cardinal direction only.

# **6\. Progression System**

## **6.1 Progression Philosophy**

Thalryn does not use experience points, levels, or skill trees. Progression is entirely knowledge-based and gear-based. The player becomes more capable by learning the world’s systems, discovering crafting recipes, and acquiring better tools and materials. The character does not become superhuman; the player becomes more resourceful.

## **6.2 Crafting Progression**

The player progresses through crafting tiers by discovering new materials and recipes. Recipes are learned through experimentation (combining materials) or by finding lore fragments in ruins that hint at advanced crafting techniques.

## **6.3 Gear Progression**

| Stage | Weapons/Tools | Armor/Protection | Typical Timing |
| :---- | :---- | :---- | :---- |
| Early Game | Wooden axe, stone knife, torch | None | 0–2 hours |
| Mid Game | Slate tools, pickaxe, bow | Bark/hide wraps (light protection) | 2–6 hours |
| Late Game | Obsidian blade, reinforced tools, traps | Reinforced armor (slate/hide composite) | 6–12 hours |
| Endgame | Ultra-Bomb, Soul Sword, Soul Arrows | N/A (post-Hazard rewards) | 12+ hours |

## **6.4 Exploration Progression**

The world naturally gates progression through danger scaling. Areas closer to spawn are safer; distant areas contain rarer resources but deadlier creatures. The Deep Undergrounds and Obsidian Cities represent the highest risk/reward zones.

## **6.5 The Hazard Progression Path**

The optional boss encounter follows a deliberate preparation chain:

* Discover Soul Sirens (requires finding Obsidian City or rare surface locations).

* Activate five Soul Sirens (each activation attracts enemies, increasing risk).

* Gather four buckets of molten soul from the Deep Undergrounds.

* Craft the Ultra-Bomb.

* Engage and defeat The Hazard through six phases.

* Earn legendary rewards (Soul Sword, Soul Arrows, Soul Shard).

# **7\. User Interface**

## **7.1 Design Philosophy**

The UI in Thalryn is minimal and diegetic wherever possible. The goal is maximum immersion with minimal screen clutter. Information is conveyed through visual and audio cues rather than explicit numerical displays when feasible.

## **7.2 HUD Elements**

| Element | Position | Display Style |
| :---- | :---- | :---- |
| Health Bar | Bottom-left | Semi-transparent bar. Pulses red when low. Only fully visible when health is below 50%. |
| Stamina Bar | Below Health | Thin bar that appears when stamina is consumed and fades when full. |
| Hunger Indicator | Bottom-left icon | Stomach icon: green (full) to yellow (low) to red (critical). |
| Thirst Indicator | Bottom-left icon | Water drop icon with same color-coding as hunger. |
| Hotbar | Bottom-center | 4–6 item slots. Semi-transparent, fades when not in use. |
| Interaction Prompt | Center-screen | Context-sensitive (e.g., 'Chop \[E\]'). Appears only near interactable objects. |
| Siren Counter | Hidden until relevant | Appears briefly after each Siren activation (e.g., '3/5 Sirens Activated'). |

## **7.3 Menus**

* **Inventory Screen:** Grid-based inventory with drag-and-drop. Displays item names, descriptions, and stack counts.

* **Crafting Interface:** Radial menu or grid showing available recipes based on current inventory. Greyed-out recipes show missing materials.

* **Pause Menu:** Settings, controls, audio/visual options, quit to title. Game pauses in single-player.

* **Death Screen:** Survival statistics: time survived, distance traveled, creatures encountered, resources gathered, cause of death.

## **7.4 Accessibility Considerations**

* Colorblind modes for all color-coded HUD elements.

* Subtitle support for ambient audio cues with directional indicators.

* Adjustable HUD scale and opacity.

* Remappable controls for keyboard/mouse and gamepad.

* Toggle options for sprinting and crouching (hold vs. toggle).

# **8\. Audio & Visual Style**

## **8.1 Visual Art Direction**

Thalryn aims for a grounded, realistic visual style with muted, desaturated tones. The world should feel oppressive and unwelcoming without relying on fantastical or digital-glitch aesthetics. The horror is biological, organic, and physical.

* **Color Palette:** Deep greens, greys, browns, and blacks on surface. Underground uses deep blues, purples (molten soul glow), and amber (crystal light). Obsidian City features stark black against muted natural overgrowth.

* **Lighting:** Dynamic lighting is critical. Daytime: dappled sunlight through canopy. Night: near-total darkness with minimal moonlight. Underground: pitch black except near crystals and molten soul. Torchlight is warm but limited in radius.

* **Creature Design:** Plausible mutations of real animals. Deformities, extra limbs, exposed musculature, unnatural movement. No glowing eyes or holographic effects.

* **Environmental Detail:** Dense foliage, realistic water, particle effects for fog/mist, destructible small flora.

## **8.2 Sound Design**

Audio is a core pillar of Thalryn’s horror experience. Sound design must be rich, layered, and directional.

* **Ambient Audio:** Persistent forest ambiance (wind, rustling, distant calls) during day. Night shifts to eerie silence punctuated by creature calls.

* **Creature Audio:** Each creature has distinct, recognizable sounds serving as early warning systems.

* **Environmental Audio:** Water flow, dripping in caves, echoes in underground chambers, cracking ground near molten soul.

* **The Hazard Audio:** Bass-heavy scream with distortion at spawn. Phase transitions marked by unique audio stings. Internal body sounds during Phase 6\.

## **8.3 Music**

Thalryn uses minimal music. Ambient drones and tension-building pads replace traditional scores. Music swells only during critical moments: The Hazard encounter, Obsidian City discovery, and the escape sequence. The absence of music during normal gameplay amplifies tension and immersion.

# **9\. Technical Requirements**

## **9.1 Target Performance**

| Platform | Target Resolution | Target Frame Rate |
| :---- | :---- | :---- |
| PC (Minimum) | 1080p | 30 FPS |
| PC (Recommended) | 1440p | 60 FPS |
| PC (High-End) | 4K | 60 FPS (uncapped optional) |
| PlayStation 5 | 4K (dynamic) | 60 FPS (Performance) / 30 FPS (Quality) |
| Xbox Series X | 4K (dynamic) | 60 FPS (Performance) / 30 FPS (Quality) |
| Xbox Series S | 1080p–1440p | 30–60 FPS |

## **9.2 Estimated PC System Requirements**

| Component | Minimum | Recommended |
| :---- | :---- | :---- |
| OS | Windows 10 64-bit | Windows 10/11 64-bit |
| CPU | Intel i5-8400 / AMD Ryzen 5 2600 | Intel i7-12700 / AMD Ryzen 7 5800X |
| RAM | 8 GB | 16 GB |
| GPU | NVIDIA GTX 1060 / AMD RX 580 | NVIDIA RTX 3070 / AMD RX 6800 XT |
| Storage | 20 GB SSD | 20 GB NVMe SSD |
| DirectX | Version 12 | Version 12 |

## **9.3 Procedural Generation Requirements**

* Chunk-based world generation with seamless loading (no loading screens during surface traversal).

* Deterministic seed-based generation for consistent world states within a single playthrough.

* LOD (Level of Detail) system for distant terrain to manage performance.

* Async chunk loading on background threads to prevent frame hitching.

## **9.4 Save System**

Single auto-save slot. Save data includes world seed, player position, inventory, explored chunks, activated Sirens, and world state. Save is deleted upon player death (permadeath).

## **9.5 Networking**

Single-player only for initial release. Architecture should accommodate potential future co-op (2–4 players) without fundamental restructuring. Optional leaderboards (survival time, distance) require online connectivity.

# **10\. Monetization**

## **10.1 Business Model**

Thalryn is a premium, buy-to-play title. No microtransactions, loot boxes, or pay-to-win mechanics. The game is sold at full retail price.

## **10.2 Post-Launch Content (Potential)**

* Paid DLC expansions adding new biomes, creatures, and boss encounters.

* Free updates with quality-of-life improvements, balance patches, and minor content additions.

* Potential co-op multiplayer mode as a major expansion.

## **10.3 Pricing Strategy**

Suggested retail price: $29.99–$39.99 USD. Final pricing to be determined based on content scope at launch.

# **Appendix A: Open Design Questions**

The following items require further design decisions and/or playtesting before finalization:

* Camera perspective: First-person vs. third-person vs. toggleable. First-person recommended for immersion; third-person aids spatial awareness.

* Sanity system: Include or exclude. Adds psychological horror depth but may frustrate players. Recommend playtesting.

* Armor/protection system: Depth of armor crafting and durability mechanics need specification.

* Specific Obsidian City creature designs and behaviors.

* Multiplayer co-op: Scope, player count, and whether world persistence changes in co-op.

* Exact crafting recipes and balance values for all items.

* Abandoned car spawn distance rules (minimum/maximum from spawn origin).

* Player shelter/base-building mechanics: Extent and complexity of buildable structures.

# **Appendix B: Glossary**

| Term | Definition |
| :---- | :---- |
| Chunk | A discrete unit of procedurally generated world terrain, loaded and unloaded as the player moves. |
| Deep Undergrounds | The cave network beneath the forest surface, containing unique resources and creatures. |
| Molten Soul | A purple, pulsating liquid found underground. Hazardous on contact. Key crafting ingredient. |
| Obsidian City | Ultra-rare secret biome containing ancient obsidian ruins, Soul Sirens, and unique loot. |
| Oil Crystals | Underground resource required to refuel the abandoned car for the win condition. |
| Permadeath | Design rule where player death is permanent and the world is erased. |
| Soul Siren | Obsidian pillars that, when activated five times total, summon The Hazard. |
| The Hazard | World-ending boss with 10,000 HP, summoned by Soul Siren activations. |
| Ultra-Bomb | Legendary crafted item from four buckets of molten soul; required to expose The Hazard’s heart. |

