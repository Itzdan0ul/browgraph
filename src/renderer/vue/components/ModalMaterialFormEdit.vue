<template>
  <div class="modal__options--material">
    <div class="modal__titles">
      <h2 class="modal__title">EDIT MATERIAL</h2>
      <p class="modal__description"
        >Don't be alarmed if you have made a mistake in the data of a material,
        Browgraph allows you to edit its information comfortably.
      </p>
    </div>
    <form class="modal__form">
      <div class="modal__input-group">
        <label class="modal__label" for="">Select category:</label>
        <select id="" class="selector modal__selector">
          <option value="undefined">Select category</option>
        </select>
      </div>
      <div class="modal__input-group">
        <label class="modal__label" for="">Write the material folio:</label>
        <input
          class="input modal__input"
          type="text"
          placeholder="Write the material folio"
        />
      </div>
      <div class="modal__input-group">
        <label class="modal__label" for="">Select publisher:</label>
        <select id="" class="selector modal__selector">
          <option value="undefined">Select publisher</option>
        </select>
      </div>
      <div class="modal__input-group">
        <label class="modal__label" for="">Write the material title:</label>
        <input
          class="input modal__input"
          type="text"
          placeholder="Write the material title"
        />
      </div>
      <div class="modal__input-group">
        <label class="modal__label" for=""
          >Write the shelf location of the material:</label
        >
        <input
          class="input modal__input"
          type="text"
          placeholder="Write the shelf location of the material"
        />
      </div>
      <button class="btn modal__btn-edit" type="submit">Edit material</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'ModalMaterialFormEdit',
  };
</script>
