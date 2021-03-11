<template lang="pug">
.base-input
    input.form-inputs__field-input.in-fi(
      :value="modelValue"
      type="text"
      :id="id"
      :placeholder="placeholder"
      :required="required"
      @mouseenter="inputHoverEvent"
      @mouseleave="inputLeaveEvent"
    )
    label(:for="id") {{ label }}
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component
export default class BaseInput extends Vue {
  // @Model('change', { type: String }) model!: string
  @Prop(String) value: string
  @Prop(String) id: string
  @Prop(String) placeholder: string
  @Prop(Boolean) required: boolean
  @Prop(String) label: string

  get modelValue() {
    return this.value
  }

  set modelValue(value) {
    this.$emit('change', value)
  }
}
</script>
