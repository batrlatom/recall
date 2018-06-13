<template>

  <q-page padding>
    <q-chat-message
  label='Sunday, 19th'
/>

<q-chat-message
  name="Jane"
  :text="['hunter2']"
  stamp="4 minutes ago"
text-color="white"
  bg-color="blue"
/>

<q-chat-message
  name="Me"
  :text="['hey, if you type in your pw', 'it will show as stars']"
  stamp="7 minutes ago"
  sent
></q-chat-message>

</q-page>

</template>

<script>
import {
  QPage,
    QChatMessage
} from "quasar-framework/dist/quasar.ios.esm";


export default {
    name: 'ChatComponent',
    data: function(){
      return {
      }
    },
    created: function(){
      console.log("chat")
    },
    components: {
      QPage,
        QChatMessage

    }
}
</script>
