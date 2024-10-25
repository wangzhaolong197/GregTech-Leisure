ServerEvents.recipes(event => {
    event.remove({ id: "enderio:copper_alloy_block" })
    event.remove({ id: "enderio:copper_alloy_ingot" })
    event.remove({ id: "enderio:copper_alloy_nugget" })
    event.remove({ id: "enderio:copper_alloy_nugget_to_ingot" })
    event.remove({ id: "enderio:energetic_alloy_block" })
    event.remove({ id: "enderio:energetic_alloy_ingot" })
    event.remove({ id: "enderio:energetic_alloy_nugget" })
    event.remove({ id: "enderio:energetic_alloy_nugget_to_ingot" })
    event.remove({ id: "enderio:vibrant_alloy_block" })
    event.remove({ id: "enderio:vibrant_alloy_ingot" })
    event.remove({ id: "enderio:vibrant_alloy_nugget" })
    event.remove({ id: "enderio:vibrant_alloy_nugget_to_ingot" })
    event.remove({ id: "enderio:redstone_alloy_block" })
    event.remove({ id: "enderio:redstone_alloy_ingot" })
    event.remove({ id: "enderio:redstone_alloy_nugget" })
    event.remove({ id: "enderio:redstone_alloy_nugget_to_ingot" })
    event.remove({ id: "enderio:conductive_alloy_block" })
    event.remove({ id: "enderio:conductive_alloy_ingot" })
    event.remove({ id: "enderio:conductive_alloy_nugget" })
    event.remove({ id: "enderio:conductive_alloy_nugget_to_ingot" })
    event.remove({ id: "enderio:pulsating_alloy_block" })
    event.remove({ id: "enderio:pulsating_alloy_ingot" })
    event.remove({ id: "enderio:pulsating_alloy_nugget" })
    event.remove({ id: "enderio:pulsating_alloy_nugget_to_ingot" })
    event.remove({ id: "enderio:dark_steel_block" })
    event.remove({ id: "enderio:dark_steel_ingot" })
    event.remove({ id: "enderio:dark_steel_nugget" })
    event.remove({ id: "enderio:dark_steel_nugget_to_ingot" })
    event.remove({ id: "enderio:soularium_block" })
    event.remove({ id: "enderio:soularium_ingot" })
    event.remove({ id: "enderio:soularium_nugget" })
    event.remove({ id: "enderio:soularium_nugget_to_ingot" })
    event.remove({ id: "enderio:end_steel_block" })
    event.remove({ id: "enderio:end_steel_ingot" })
    event.remove({ id: "enderio:end_steel_nugget" })
    event.remove({ id: "enderio:end_steel_nugget_to_ingot" })
    event.remove({ id: "enderio:wood_gear_corner" })
    event.remove({ id: "enderio:wood_gear" })
    event.remove({ id: "enderio:alloy_smelting/energetic_alloy_ingot" })
    event.remove({ id: "enderio:alloy_smelting/vibrant_alloy_ingot" })
    event.remove({ id: "enderio:alloy_smelting/dark_steel_ingot" })
    event.remove({ id: "enderio:alloy_smelting/end_steel_ingot" })

    const gtr = event.recipes.gtceu

    gtr.forming_press("gtlcore:wood_gear")
        .itemInputs("4x gtceu:wood_plate")
        .notConsumable("gtceu:gear_casting_mold")
        .itemOutputs("enderio:wood_gear")
        .EUt(16)
        .duration(60)

    gtr.alloy_smelter("gtlcore:soularium_ingot")
        .itemInputs("minecraft:gold_ingot", "#minecraft:soul_fire_base_blocks")
        .itemOutputs("enderio:soularium_ingot")
        .EUt(16)
        .duration(200)

    gtr.mixer("gtlcore:copper_alloy_ingot_dust")
        .itemInputs("enderio:powdered_copper", "gtceu:silicon_dust")
        .circuit(2)
        .itemOutputs("2x gtceu:copper_alloy_ingot_dust")
        .EUt(30)
        .duration(120)

    gtr.mixer("gtlcore:energetic_alloy_dust")
        .itemInputs("minecraft:redstone", "enderio:powdered_gold", "minecraft:glowstone_dust")
        .circuit(3)
        .itemOutputs("3x gtceu:energetic_alloy_dust")
        .EUt(30)
        .duration(480)

    gtr.mixer("gtlcore:vibrant_alloy_dust")
        .circuit(2)
        .itemInputs("gtceu:energetic_alloy_dust", "enderio:powdered_ender_pearl")
        .itemOutputs("2x gtceu:vibrant_alloy_dust")
        .EUt(120)
        .duration(400)

    gtr.mixer("gtlcore:redstone_alloy_dust")
        .itemInputs("minecraft:redstone", "gtceu:silicon_dust")
        .circuit(2)
        .itemOutputs("2x gtceu:redstone_alloy_dust")
        .EUt(30)
        .duration(320)

    gtr.mixer("gtlcore:conductive_alloy_dust")
        .itemInputs("gtceu:copper_alloy_ingot_dust", "enderio:powdered_iron", "minecraft:redstone")
        .circuit(3)
        .itemOutputs("3x gtceu:conductive_alloy_dust")
        .EUt(30)
        .duration(240)

    gtr.mixer("gtlcore:pulsating_alloy_dust")
        .itemInputs("enderio:powdered_iron", "enderio:powdered_ender_pearl")
        .circuit(2)
        .itemOutputs("2x gtceu:pulsating_alloy_dust")
        .EUt(30)
        .duration(160)

    gtr.mixer("gtlcore:dark_steel_dust")
        .itemInputs("enderio:powdered_iron", "enderio:powdered_coal", "enderio:powdered_obsidian")
        .circuit(3)
        .itemOutputs("3x gtceu:dark_steel_dust")
        .EUt(120)
        .duration(180)

    gtr.mixer("gtlcore:end_steel_dust")
        .itemInputs("gtceu:endstone_dust", "gtceu:dark_steel_dust", "enderio:powdered_obsidian")
        .circuit(3)
        .itemOutputs("3x gtceu:end_steel_dust")
        .EUt(480)
        .duration(360)

    gtr.chemical_bath("gtlcore:vibrant_alloy_ingot")
        .itemInputs("gtceu:hot_vibrant_alloy_ingot")
        .inputFluids("gtceu:distilled_water 100")
        .itemOutputs("enderio:vibrant_alloy_ingot")
        .EUt(120)
        .duration(280)

    gtr.assembler("enderio:ender_fluid_conduit")
        .itemInputs("enderio:pressurized_fluid_conduit", "gtceu:tiny_ender_pearl_dust","enderio:conduit_binder")
        .itemOutputs("2x enderio:ender_fluid_conduit")
        .EUt(16)
        .duration(120)
})