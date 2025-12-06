<?php
namespace Waxedphp\Editorjs;

class Setter extends \Waxedphp\Waxedphp\Php\Setters\AbstractSetter {

  /**
   * @var array<mixed> $setup
   */
  private array $setup = [
  ];

  /**
   * @var array<mixed> $commands
   */
  private array $commands = [];
  
  /**
   * allowed options
   *
   * @var array<mixed> $_allowedOptions
   */
  protected array $_allowedOptions = [
  ];

  function setValue($value) {
    $this->setup['value'] = $value;
    return $this;
  }

  function setMode($mode) {
    $this->setup['mode'] = $mode;
    return $this;
  }

  function setTheme($theme) {
    $this->setup['theme'] = $theme;
    return $this;
  }
  
  /**
   * 
   */
  function save() {
    $this->commands[] = ['cmd' => 'save'];
    return $this;
  }

  /**
  * value
  *
  * @param mixed $value
  * @return array<mixed>
  */
  public function value(mixed $value = ''): array {
    $a = [];
    $b = $this->getArrayOfAllowedOptions();
    if (!empty($b)) {
      $a['config'] = $b;
    }
    $a['value'] = $value;
    if (!empty($this->commands)) {
      $a['commands'] = $this->commands;
      $this->commands = [];
    };
    return $a;
  }

}
