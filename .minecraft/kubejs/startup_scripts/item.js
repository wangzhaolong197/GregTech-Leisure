// priority: 99
ItemEvents.armorTierRegistry(event => {
    event.add("magnetohydrodynamicallyconstrainedstarmatter", tier => {
        tier.durabilityMultiplier = -1
        tier.slotProtections = [0, 0, 0, 0]
        tier.enchantmentValue = 10
        tier.equipSound = "minecraft:item.armor.equip_iron"
        tier.repairIngredient = "#forge:ingots/magnetohydrodynamicallyconstrainedstarmatter"
        tier.toughness = 0
        tier.knockbackResistance = 10
    })
    event.add("fermium", tier => {
        tier.durabilityMultiplier = -1
        tier.slotProtections = [16, 24, 22, 14]
        tier.enchantmentValue = 10
        tier.equipSound = "minecraft:item.armor.equip_iron"
        tier.toughness = 10
        tier.knockbackResistance = 1
    })
    event.add("space_fermium", tier => {
        tier.durabilityMultiplier = -1
        tier.slotProtections = [16, 24, 22, 14]
        tier.enchantmentValue = 14
        tier.equipSound = "minecraft:item.armor.equip_iron"
        tier.toughness = 10
        tier.knockbackResistance = 2
    })
})
StartupEvents.registry("item", event => {
    const circuits = [
        "bioware",
        "optical",
        "exotic",
        "cosmic",
        "supracausal"
    ]
    circuits.forEach((circuit) => {
        event.create(circuit + "_processor")
        event.create(circuit + "_assembly")
        event.create(circuit + "_computer")
        event.create(circuit + "_mainframe")
        event.create(circuit + "_circuit_board")
        event.create(circuit + "_printed_circuit_board")
        event.create("smd_capacitor_" + circuit)
        event.create("smd_diode_" + circuit)
        event.create("smd_resistor_" + circuit)
        event.create("smd_transistor_" + circuit)
        event.create("smd_inductor_" + circuit)
    })
    circuits.slice(1, 5).forEach((circuit) => {
        event.create(circuit + "_ram_wafer")
        event.create(circuit + "_ram_chip")
    })
    const grade_1s =
        ["uhv", "uev", "uiv", "uxv", "opv", "max"]
    grade_1s.forEach((grade_1) => {
        event.create(grade_1 + "_voltage_coil")
    })
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"]
    tiers.forEach((suprachronal) => {
        event.create("suprachronal_" + suprachronal)
            .tag("gtceu:circuits/" + suprachronal)
    })
    tiers.slice(0, 12).forEach((magneto_resonatic) => {
        event.create("circuit_resonatic_" + magneto_resonatic)
            .tag("gtceu:circuits/" + magneto_resonatic)
    })
    tiers.forEach((universal_circuit) => {
        event.create(universal_circuit + "_universal_circuit")
            .tag("gtceu:circuits/" + universal_circuit)
            .displayName(universal_circuit.toUpperCase() + "通用电路板")
            .tooltip("§7一个通用的电路板")
    })
    const space_drones = [1, 2, 3, 4, 5, 6]
    space_drones.forEach((space_drone) => {
        event.create("space_drone_mk" + space_drone)
    })
    const veins = [
        "apatite_vein", "banded_iron_vein", "bauxite_vein_end", "beryllium_vein", "cassiterite_vein", "certus_quartz", "coal_vein", "copper_tin_vein", "copper_vein", "diamond_vein", "galena_vein", "garnet_tin_vein", "garnet_vein", "iron_vein", "lapis_vein", "lubricant_vein", "magnetite_vein_end", "magnetite_vein_ow", "manganese_vein", "manganese_vein_ow", "mica_vein", "mineral_sand_vein", "molybdenum_vein", "monazite_vein", "naquadah_vein", "nether_quartz_vein", "nickel_vein", "oilsands_vein", "olivine_vein", "pitchblende_vein_end", "redstone_vein", "redstone_vein_ow", "saltpeter_vein", "salts_vein", "sapphire_vein", "scheelite_vein", "sheldonite_vein", "sulfur_vein", "tetrahedrite_vein", "topaz_vein"]
    veins.forEach((vein) => {
        event.create(vein + "_essence")
            .texture("kubejs:item/" + vein)
            .tag("kubjes:vein_essence")
    })
    event.create("space_essence")
    event.create("bedrock_destroyer", "pickaxe")
    event.create("lepton_trap_crystal")
    event.create("charged_lepton_trap_crystal")
    event.create("quantum_anomaly")
    event.create("hassium_seed_crystal")
    event.create("raw_imprinted_resonatic_circuit_board")
    event.create("imprinted_resonatic_circuit_board")
    event.create("rotating_transparent_surface")
    event.create("electron_source")
    event.create("essence")
    event.create("essence_seed")
    event.create("nuclear_star")
    event.create("unstable_star")
    event.create("hyperdimensional_drone")
        .unstackable()
    event.create("precision_circuit_assembly_robot_mk1")
    event.create("precision_circuit_assembly_robot_mk2")
    event.create("precision_circuit_assembly_robot_mk3")
    event.create("precision_circuit_assembly_robot_mk4")
    event.create("precision_circuit_assembly_robot_mk5")
    event.create("scrap")
    event.create("scrap_box")
    event.create("nuclear_waste")
    event.create("resonating_gem")
    event.create("echobone")
    event.create("netherite_rod")
    event.create("long_netherite_rod")
    event.create("magnetic_netherite_rod")
    event.create("magnetic_long_netherite_rod")
    event.create("ingot_field_shape")
        .texture("gtceu:item/ingot_casting_mold")
        .unstackable()
    event.create("ball_field_shape")
        .texture("gtceu:item/ball_casting_mold")
        .unstackable()
    event.create("plasma_containment_cell")
    event.create("rhenium_plasma_containment_cell")
    event.create("actinium_superhydride_plasma_containment_cell")
    event.create("overworld_data")
        .texture("gtceu:item/data_stick")
    event.create("nether_data")
        .texture("gtceu:item/data_stick")
    event.create("end_data")
        .texture("gtceu:item/data_stick")
    event.create("dragon_stem_cells")
    event.create("dragon_cells")
    event.create("bioware_boule")
    event.create("bioware_chip")
    event.create("bioware_processing_core")
    event.create("biological_cells")
    event.create("optical_soc")
    event.create("optical_soc_containment_housing")
    event.create("optical_slice")
    event.create("optical_processing_core")
    event.create("optical_wafer")
    event.create("photon_carrying_wafer")
    event.create("raw_photon_carrying_wafer")
    event.create("exotic_processing_core")
    event.create("cosmic_processing_core")
    event.create("supracausal_processing_core")
    event.create("non_linear_optical_lens")
        .texture("gtceu:item/yellow_glass_lens")
    event.create("periodically_poled_lithium_niobate_boule")
    event.create("highly_reflective_mirror")
    event.create("low_frequency_laser")
    event.create("medium_frequency_laser")
    event.create("high_frequency_laser")
    event.create("red_halide_lamp")
    event.create("green_halide_lamp")
    event.create("blue_halide_lamp")
    event.create("ballast")
    event.create("empty_laser_cooling_container")
    event.create("high_precision_crystal_soc")
    event.create("bose_einstein_cooling_container")
    event.create("laser_cooling_unit")
    event.create("laser_diode")
    event.create("magnetic_trap")
    event.create("rydberg_spinorial_assembly")
    event.create("x_ray_laser")
    event.create("cryogenic_interface")
    event.create("exotic_wafer")
    event.create("exotic_chip")
    event.create("x_ray_waveguide")
    event.create("microfocus_x_ray_tube")
    event.create("x_ray_mirror_plate")
    event.create("cosmic_processing_unit_core")
    event.create("ultrashort_pulse_laser")
    event.create("diffractor_grating_mirror")
    event.create("grating_lithography_mask")
    event.create("lithography_mask")
    event.create("photocoated_hassium_boule")
    event.create("photocoated_hassium_wafer")
    event.create("time_dilation_containment_unit")
    event.create("neutron_plasma_containment_cell")
    event.create("neutronium_sphere")
    event.create("charged_triplet_neutronium_sphere")
    event.create("triplet_neutronium_sphere")
    event.create("contained_high_density_protonic_matter")
    event.create("extremely_durable_plasma_cell")
    event.create("dense_neutron_plasma_cell")
    event.create("cosmic_neutron_plasma_cell")
    event.create("crystalmatrix_plasma_containment_cell")
    event.create("quantumchromodynamic_protective_plating")
    event.create("draconiumawakened_plasma_containment_cell")
    event.create("chaos_containment_unit")
    event.create("cosmic_mesh_containment_unit")
    event.create("microwormhole_generator")
    event.create("graviton_transducer")
    event.create("contained_reissner_nordstrom_singularity")
    event.create("contained_kerr_newmann_singularity")
    event.create("contained_kerr_singularity")
    event.create("contained_exotic_matter")
    event.create("macrowormhole_generator")
    event.create("stabilized_wormhole_generator")
    event.create("topological_manipulator_unit")
    event.create("relativistic_spinorial_memory_system")
    event.create("nuclear_clock")
    event.create("scintillator")
    event.create("scintillator_crystal")
    event.create("manifold_oscillatory_power_cell")
    event.create("recursively_folded_negative_space")
    event.create("eigenfolded_kerr_manifold")
    event.create("ctc_computational_unit_container")
    event.create("ctc_computational_unit")
    event.create("ctc_guidance_unit")
    event.create("highly_dense_polymer_plate")
    event.create("space_probe_mk1")
    event.create("space_probe_mk2")
    event.create("space_probe_mk3")
    event.create("hypercube")
    event.create("annihilation_constrainer")
    event.create("neutronium_antimatter_fuel_rod")
        .texture("kubejs:item/antimatter_fuel_rod")
    event.create("draconium_antimatter_fuel_rod")
        .texture("kubejs:item/antimatter_fuel_rod")
    event.create("cosmicneutronium_antimatter_fuel_rod")
        .texture("kubejs:item/antimatter_fuel_rod")
    event.create("infinity_antimatter_fuel_rod")
        .texture("kubejs:item/antimatter_fuel_rod")
    event.create("solar_light_splitter")
    event.create("create_ultimate_battery")
    event.create("suprachronal_mainframe_complex")
    event.create("zero_point_module_fragments")
    event.create("basic_control_circuit")
    event.create("advanced_control_circuit")
    event.create("elite_control_circuit")
    event.create("ultimate_control_circuit")
    event.create("ultima_control_circuit")
    event.create("tcetieseaweedextract")
    event.create("tcetiedandelions")
    event.create("woven_kevlar")
    event.create("kevlar_fiber")
    event.create("infused_breath")
    event.create("warped_ender_pearl")
    event.create("chaos_shard")
    event.create("cosmic_fabric")
    event.create("draconic_core")
    event.create("wyvern_core")
    event.create("awakened_core")
        .glow(true)
    event.create("chaotic_core")
        .glow(true)
    event.create("wyvern_energy_core")
    event.create("draconic_energy_core")
        .glow(true)
    event.create("chaotic_energy_core")
        .glow(true)
    event.create("draconium_dust")
    event.create("dragon_heart")
    event.create("stabilizer_core")
        .glow(true)
    event.create("dragon_stabilizer_core")
        .glow(true)
    event.create("rutherfordium_neutronium_boule")
    event.create("rutherfordium_neutronium_wafer")
    event.create("taranium_boule")
    event.create("taranium_wafer")
    event.create("prepared_cosmic_soc_wafer")
    event.create("cosmic_soc_wafer")
    event.create("cosmic_soc")
    event.create("time_twister")
        .maxDamage(2000)
        .unstackable()
        .glow(true)
    event.create("time_twister_wireless")
        .rarity("epic")
        .unstackable()
        .glow(true)
        .texture("kubejs:item/time_twister")
    event.create("nm_wafer")
    event.create("nm_chip")
    event.create("pm_wafer")
    event.create("pm_chip")
    event.create("fm_wafer")
    event.create("fm_chip")
    event.create("fullerene_polymer_matrix_soft_tubing")
    event.create("fullerene_polymer_matrix_fine_tubing")
    event.create("dust_blizz")
    event.create("dust_cryotheum")
    event.create("magnetohydrodynamicallyconstrainedstarmatter_helmet", "helmet")
        .tier("magnetohydrodynamicallyconstrainedstarmatter")
        .tag("gtceu:ppe_armor")
    event.create("magnetohydrodynamicallyconstrainedstarmatter_chestplate", "chestplate")
        .tier("magnetohydrodynamicallyconstrainedstarmatter")
        .tag("gtceu:ppe_armor")
    event.create("magnetohydrodynamicallyconstrainedstarmatter_leggings", "leggings")
        .tier("magnetohydrodynamicallyconstrainedstarmatter")
        .tag("gtceu:ppe_armor")
    event.create("magnetohydrodynamicallyconstrainedstarmatter_boots", "boots")
        .tier("magnetohydrodynamicallyconstrainedstarmatter")
        .tag("gtceu:ppe_armor")
    event.create("fermium_helmet", "helmet")
        .tier("fermium")
    event.create("fermium_chestplate", "chestplate")
        .tier("fermium")
    event.create("fermium_leggings", "leggings")
        .tier("fermium")
    event.create("fermium_boots", "boots")
        .tier("fermium")
    event.create("space_fermium_helmet", "helmet")
        .tier("space_fermium")
    event.create("space_fermium_chestplate", "chestplate")
        .tier("space_fermium")
    event.create("space_fermium_leggings", "leggings")
        .tier("space_fermium")
    event.create("space_fermium_boots", "boots")
        .tier("space_fermium")
    event.create("reinforced_echo_shard")
    event.create("bedrock_drill")
    event.create("memory_foam_block")
    event.create("graphene_iron_plate")
    event.create("insulation_wire_assembly")
    event.create("aerographene")
    event.create("command_block_core")
    event.create("chain_command_block_core")
    event.create("repeating_command_block_core")
    event.create("command_wand")
        .unstackable()
    event.create("two_way_foil")
    event.create("hyper_stable_self_healing_adhesive")
    event.create("black_body_naquadria_supersolid")
    event.create("heartofthesmogus")
    event.create("void_matter")
    event.create("temporal_matter")
    event.create("proto_matter")
    event.create("omni_matter")
    event.create("kinetic_matter")
    event.create("essentia_matter")
    event.create("dark_matter")
    event.create("corporeal_matter")
    event.create("amorphous_matter")
    event.create("pellet_antimatter")
    event.create("dyson_swarm_module")
    event.create("infinite_cell_component")
    event.create("glacio_spirit")
    event.create("timepiece")
    event.create("entangled_singularity")
    event.create("cosmic_singularity")
    event.create("spacetime_catalyst")
    event.create("eternity_catalyst")
    event.create("precision_steam_mechanism")
    for (let i = 0; i < 16; i++) {
        event.create("combined_singularity_" + i)
    }
    event.create("inverter")
    event.create("giga_chad")
    event.create("reactor_fuel_rod")
    event.create("tungsten_carbide_reactor_fuel_rod")
    function create_reactor(name) {
        event.create("reactor_" + name + "_simple")
        event.create("reactor_" + name + "_dual")
        event.create("reactor_" + name + "_quad")
        event.create("depleted_reactor_" + name + "_simple")
        event.create("depleted_reactor_" + name + "_dual")
        event.create("depleted_reactor_" + name + "_quad")
    }
    create_reactor("uranium")
    create_reactor("thorium")
    create_reactor("mox")
    create_reactor("naquadah")
    event.create("grindball_soapstone")
        .unstackable()
        .maxDamage(50)
    event.create("grindball_aluminium")
        .unstackable()
        .maxDamage(100)
    event.create("hui_circuit_1")
        .tooltip(Component.literal("§793015-T浮点运算/秒"))
    event.create("hui_circuit_2")
        .tooltip(Component.literal("§776M处理单元"))
    event.create("hui_circuit_3")
        .tooltip(Component.literal("§7无效RSA算法"))
    event.create("hui_circuit_4")
        .tooltip(Component.literal("§7第56梅森素数"))
    event.create("hui_circuit_5")
        .tooltip(Component.literal("§7佯谬"))
    event.create("special_ceramics")
    event.create("fishbig_body")
    event.create("fishbig_hade")
    event.create("fishbig_hair")
    event.create("fishbig_lhand")
    event.create("fishbig_lleg")
    event.create("fishbig_rhand")
    event.create("fishbig_rleg")
    event.create("fishbig_fabric")
    event.create("fishbig_frame")
})
ItemEvents.modification(event => {
    event.modify("gtceu:raw_coal", modification => {
        modification.setBurnTime(1600)
    })
    event.modify("minecraft:diamond", modification => {
        modification.setBurnTime(1280000)
    })
    event.modify("minecraft:diamond_block", modification => {
        modification.setBurnTime(12800000)
    })
    event.modify("kubejs:diamond_compressed_block", modification => {
        modification.setBurnTime(120000000)
    })

})