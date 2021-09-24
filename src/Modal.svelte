<script>
  import { titleWritable, messageWritable } from './modalController'
</script>

<div class="modal fade" id="commonModal" tabindex="-1" aria-labelledby="commonModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="commonModalLabel">{$titleWritable}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        {$messageWritable}
      </div>
    </div>
  </div>
</div>

<style>
  .modal-body {
    white-space: pre-line;
  }
</style>
