<?php
function jase_html_tag($variables) {

  $element = $variables['element'];

  // Remove type="..." and CDATA prefix/suffix.
  unset($element['#attributes']['type'], $element['#value_prefix'], $element['#value_suffix']);

  // Remove media="all" but leave others unaffected.
  if (isset($element['#attributes']['media']) && $element['#attributes']['media'] === 'all') {
    unset($element['#attributes']['media']);
  }

  $attributes = isset($element['#attributes']) ? drupal_attributes($element['#attributes']) : '';

  if (!isset($element['#value'])) {
    return '<' . $element['#tag'] . $attributes . ">\n";
  } else {
    $output = '<' . $element['#tag'] . $attributes . '>';
    if (isset($element['#value_prefix'])) {
      $output .= $element['#value_prefix'];
    }
    $output .= $element['#value'];
    if (isset($element['#value_suffix'])) {
      $output .= $element['#value_suffix'];
    }
    $output .= '</' . $element['#tag'] . ">\n";

    return $output;
  }
}


function jase_preprocess_block(&$variables) {
  if(module_exists('blockify')) {
    $variables['block_html_id'] = str_replace('blockify-blockify-', '', $variables['block_html_id']);
    $key = array_search('block-blockify',$variables['classes_array']);
    if($key){
      unset($variables['classes_array'][$key]);
    }
  }
}
