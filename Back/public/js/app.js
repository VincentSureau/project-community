$(function () {
  $('[data-toggle="tooltip"]').tooltip()
  $(".chosen-select").chosen(
    { no_results_text: "Oops, aucun résultat",
      width: "100%"
    }
    )
})