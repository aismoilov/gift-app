// form/authenticationForm.vue

<template>
  <v-form
    ref="form"
    v-model="form.valid"
    lazy-validation
  >
    <v-text-field
      v-model="form.email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="form.password"
      :counter="20"
      :rules="passwordRules"
      :type="'password'"
      label="Пароль"
      required
    ></v-text-field>
    <v-btn
      :disabled="!form.valid"
      color="indigo lighten-1"
      class="mr-4"
      @click="validate"
    >
      {{ buttonTitle }}
    </v-btn>
  </v-form>
</template>

<script>
export default {
  name: 'authenticationForm',
  data: () => ({
    emailRules: [
      v => !!v || 'Введите email',
      v => /.+@.+\..+/.test(v) || 'Невалидный email',
    ],
    passwordRules: [
      v => !!v || 'Введите пароль',
      v => (v.length <= 20) || 'Пароль должен быть меньше 20 символов',
    ]
  }),
  props: {
    form: {
      required: true,
    },
    buttonTitle: {
      required: true
    }
  },
  mounted () {
  this.form.valid = false
    },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.form.finish = true
        this.$emit('update:form', this.form)
      }
    }
  }
}
</script>
