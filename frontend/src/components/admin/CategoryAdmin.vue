<template>
  <div class="category-admin">
    <b-form>
      <input id="category-id" type="hidden" v-model="category.id" />
      <b-form-group label="Nome:" label-for="category-name">
        <b-form-input
          id="category-name"
          placeholder="Nome da categoria..."
          required
          :readonly="mode === 'remove'"
          type="text"
          v-model="category.name"
        />
      </b-form-group>
      <b-form-group label="Categoria Pai:" label-for="category-parentId">
        <b-form-select
          v-if="mode === 'save'"
          id="category-parentId"
          v-model="category.parentId"
          :options="categories"
        />
        <b-form-input
          v-else
          id="category-parentId"
          type="text"
          readonly
          v-model="category.path"
        />
      </b-form-group>
      
      <b-button variant="primary" v-if="mode === 'save'" @click="save">
        Salvar
      </b-button>
      <b-button variant="danger" v-if="mode === 'remove'" @click="remove">
        Excluir
      </b-button>
      <b-button class="ml-2" @click="reset"> Cancelar </b-button>
    </b-form>
    <hr />
    <b-table hover striped :items="categories.slice(1)" :fields="fields">
      <template slot="actions" slot-scope="data">
        <b-button
          class="mr-2"
          variant="warning"
          @click="loadCategory(data.item)"
        >
          <i class="fa fa-pencil"></i>
        </b-button>
        <b-button variant="danger" @click="loadCategory(data.item, 'remove')">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
    </b-table>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl, showError } from "@/global";

export default {
  name: "CategoryAdmin",
  data: function () {
    return {
      // selected: null,
      mode: "save",
      category: {},
      categories: [],
      fields: [
        { key: "id", label: "Código", sortable: true },
        { key: "name", label: "Nome", sortable: true },
        { key: "path", label: "Caminho", sortable: true },
        { key: "actions", label: "Ações" },
      ],
      // options: [],
    };
  },
  methods: {
    loadCategories() {
      const url = `${baseApiUrl}/categories`;
      axios.get(url).then((res) => {
        // this.categories = res.data;
        this.categories = res.data.map((category) => {
          return { ...category, value: category.id, text: category.path };
        });
        this.categories.unshift({
          text: "",
          value: null,
          id: null,
          parentId: null,
        });
        // this.options = this.categories.map((category) => {
        //   return { value: category.path, text: `${category.path}` };
        // });
      });
    },
    reset() {
      this.mode = "save";
      this.category = {};
      this.loadCategories();
      // this.selected = null;
    },
    save() {
      const method = this.category.id ? "put" : "post";
      const id = this.category.id ? `/${this.category.id}` : "";

      axios[method](`${baseApiUrl}/categories${id}`, this.category)
        .then(() => {
          this.$toasted.global.defaultSuccess({
            message: "Categoria salva com sucesso!",
          });
          this.reset();
        })
        .catch(showError);
    },
    remove() {
      const id = this.category.id;
      axios
        .delete(`${baseApiUrl}/categories/${id}`)
        .then(() => {
          this.$toasted.global.defaultSuccess({
            message: "Categoria removida com sucesso!",
          }),
            this.reset();
        })
        .catch(showError);
    },
    loadCategory(category, mode = "save") {
      this.mode = mode;
      this.category = { ...category };
    },
  },
  mounted() {
    this.loadCategories();
  },
};
</script>

<style>
</style>
